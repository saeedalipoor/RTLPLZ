import { getAbsolutePosition, loadFontsAsync } from "@create-figma-plugin/utilities";
import { data } from "../commands/editor/main";
import { getNodePluginData, setNodePluginData } from "./data";
import { findAll } from "./findMethods";
import is from "./is";
import isVisible from "./isVisible";
import RTLPLZ from "./rtlplz";
import { setRelaunchButtons } from "./setRelauncButtons";

export const hasDifferenttextStyles = (node: NodesWithText) => {
  return (node.type === 'TEXT' && node.fontName === figma.mixed) || (node.type !== 'TEXT' && node.text.fontName === figma.mixed)
}

export const findTextNodes = (nodes: Array<SceneNode | BaseNode>): TextNode[] => {
  if (figma.editorType === "figma") {
    return findAll(nodes, (node: SceneNode | BaseNode) => (node.type === "TEXT" || (node as StickyNode | ShapeWithTextNode | ConnectorNode).text) && isVisible(node));
  } else {
    return findAll(nodes, (node: SceneNode | BaseNode) => (node.type === "TEXT" || (node as StickyNode | ShapeWithTextNode | ConnectorNode).text)).map((node: SceneNode) => {
      return node
    });
  }
}

export const getRTLPLZData = (node: NodesWithText): RTLPLZData => {
  const { original, current } = getNodePluginData(node, {})
  return { original, current }
}

export const getCharachtersForEditor = (node: NodesWithText): string => {
  if (!node) return '';
  let { characters } = node as TextNode;
  if (!characters && node.type !== "TEXT") characters = (node as StickyNode).text.characters;
  const { current, original } = getRTLPLZData(node);
  if (original && current === characters) return original;
  return RTLPLZ(characters);
}

export const getNodePath = (node: SceneNode): SceneNode[] => {
  const result = [node];
  if (node.parent && ["FRAME", "GROUP", "COMPONENT", "COMPONENT_SET", "INSTANCE"].includes(node.parent.type)) return [...result, ...getNodePath(node.parent as SceneNode)]
  return result;
}

export const getTextNodeData = (node: TextNode): TextNodeData => {
  const { id } = node;
  return ({
    id,
    name: getNodePath(node).map(n => n.name).reverse(),
    characters: getCharachtersForEditor(node),
    position: figma.editorType === 'figma' ? getAbsolutePosition(node) : { x: 0, y: 0 },
    figjamParentId: figma.editorType === 'figjam' ? node.parent?.id : undefined
  })
}

export const writeToNode = async ({
  node,
  characters,
  reverse = true
}: {
  node: NodesWithText
  characters: string | {
    original?: string
    current: string
  }
  reverse?: boolean
}): Promise<{ original?: string, current: string }> => {
  try {
    if (figma.editorType === "figma") {
      await loadFontsAsync([node])
    } else {
      await figma.loadFontAsync({ family: data.getData().settings?.preferedFigjamFont || "Tahoma", style: "Regular" })
      if (node.type === "TEXT") {
        node.fontName = { family: data.getData().settings?.preferedFigjamFont || "Tahoma", style: "Regular" };
      } else {
        node.text.fontName = { family: data.getData().settings?.preferedFigjamFont || "Tahoma", style: "Regular" };
      }
    }
  } catch (error) {
    figma.notify(error as string)
    throw new Error(error as string);
  }

  let newData;
  if (typeof characters === "string") {
    newData = is.ltr(characters)
      ? {
        current: characters,
      }
      : {
        current: reverse
          ? RTLPLZ(characters, node, true, true)
          : characters,
        original: characters
      };
  } else {
    newData = characters;
  }

  let pluginData = getRTLPLZData(node);
  if (figma.editorType === 'figma' && (node.name === pluginData.original || node.name === (node as TextNode).characters || (node as TextNode).autoRename)) {
    node.name = newData.original || newData.current;
  }

  setRelaunchButtons(node, ["ui", "wrap"]);
  setNodePluginData(node, newData);
  if (newData) {
    if ((node as TextNode).characters !== undefined) {
      (node as TextNode).characters = newData.current;
    } else {
      (node as StickyNode).text.characters = newData.current;
    }
  }
  data.updateNodeData(node.id)
  return newData;
};
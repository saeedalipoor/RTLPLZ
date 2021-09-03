import { pluralize } from "@create-figma-plugin/utilities";
import { getNodePluginData, setNodePluginData } from "../../utils";
import is from "../../utils/is";
import { kiddingMe } from "../../utils/kiddingMe";
import { setRelaunchButtons } from "../../utils/setRelauncButtons";
import { findTextNodes, writeToNode } from "../../utils/textNode";

export default async function (close = true, notify = true, nodes?: SceneNode[]) {
  const textNodes = (nodes ? findTextNodes(nodes) : findTextNodes([...figma.currentPage.selection])).filter(node => !is.ltr(node.characters));
  if (!textNodes.length) {
    if (close) {
      figma.closePlugin(
        "Select layer(s) that edited or reversed with RTL PLZ and run again | Alt + Ctrl/Command + P"
      );
    } else {
      if (notify) {
        figma.notify("Select layer(s) that edited or reversed with RTL PLZ and run again", {
          timeout: 2500,
        });
      }
      return;
    }
  }
  let reversedNodes = 0;
  let node;
  for (let i = 0; i < textNodes.length; i++) {
    try {
      node = <TextNode>textNodes[i];
      const { original, current } = getNodePluginData(node, {});
      if (original && current === node.characters) {
        await writeToNode({
          node,
          characters: original,
          reverse: false
        })
      } else {
        await writeToNode({
          node,
          characters: node.characters
        })
      }
      setNodePluginData(node, {});
      setRelaunchButtons(node, []);
      reversedNodes++;
    } catch (error) {
      console.error(error);
    }
  }
  if (reversedNodes) {
    if (notify) {
      figma[close ? "closePlugin" : "notify"](`${pluralize(reversedNodes, 'One layer', `${reversedNodes} layers`)} Reset`,
        { timeout: 2500 }
      );
    }
    return;
  }
  if (notify) {
    kiddingMe(close);
  }
}

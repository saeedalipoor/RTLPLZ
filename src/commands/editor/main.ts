import { getAbsolutePosition, loadSettingsAsync, showUI } from "@create-figma-plugin/utilities";
import reverse from '../../commands/reverse/main';
import rewrap from '../../commands/rewrap/main';
import { defaultPluginSetting, windowSize } from "../../constants";
import editorTextChangeListener from "../../listeners/editorTextChange";
import resizeListener from "../../listeners/resize";
import settingsListener from "../../listeners/settings";
import tabChangeListener from "../../listeners/tabChange";
import { emit, getTopLevelParent, on } from "../../utils";
import debounce from "../../utils/debounce";
import { getBoundingRect } from "../../utils/getBoundingRect";
import { findTextNodes } from "../../utils/textNode";
import Data from "./data";


resizeListener();
tabChangeListener();
settingsListener();
editorTextChangeListener();


const handleSelectionChange = () => {
  data.updateSelecton();
  emit("SELECTION_CHANGE", data.getData())
}

on("NODE_TEXT_FOCUS", (id) => {
  const node = <TextNode>figma.getNodeById(id);
  const nodeBounds = { ...getAbsolutePosition(node), width: node.width, height: node.height };
  const viewBounds = figma.viewport.bounds;
  figma.currentPage.selection = [node];
  if (
    nodeBounds.x > viewBounds.x && nodeBounds.x + nodeBounds.width < viewBounds.x + viewBounds.width
    &&
    nodeBounds.y > viewBounds.y && nodeBounds.y + nodeBounds.height < viewBounds.y + viewBounds.height
  ) {
    // 
  } else {
    figma.viewport.scrollAndZoomIntoView([node]);

  }
});

figma.on("selectionchange", debounce(handleSelectionChange, 250) as () => void);




async function handleReverse() {
  await reverse(false, false);
  findTextNodes([...figma.currentPage.selection]).forEach(node => {
    data.updateNodeData(node.id)
  })
}
on('REVERSE', handleReverse);


export const data = new Data();




let currentSelectionBounding = getBoundingRect([...figma.currentPage.selection]);
// let currentSelectionParentBounding;
let selectedIds = figma.currentPage.selection.map(node => node.id).join("-");
setInterval(() => {
  if (
    data.getData().settings?.liveWrap &&
    figma.currentPage.selection.length < 20 &&
    selectedIds === figma.currentPage.selection.map(node => node.id).join("-")
  ) {
    if (currentSelectionBounding.width !== getBoundingRect([...figma.currentPage.selection]).width) {
      const layersForRewrap = figma.currentPage.selection.filter(node => node.type !== "FRAME");
      layersForRewrap.forEach(layer => {
        if (getTopLevelParent(layer, node => (node as FrameNode).layoutMode === "VERTICAL")) {
          rewrap(false, false, (getTopLevelParent(layer, node => (node as FrameNode).layoutMode === "VERTICAL") as FrameNode).children as SceneNode[]);
        } else {
          rewrap(false, false, layersForRewrap);
        }
      })

    }
    // if (layersForRewrap.length) {
    // }

    // const topLevelVerticalAutoLayoutFrame = getTopLevelParent(figma.currentPage.selection[0], node => node.type === "FRAME" && node.layoutMode === "VERTICAL");
    // if (figma.currentPage.selection.length === 1 && topLevelVerticalAutoLayoutFrame) {
    //   // @ts-ignore
    //   if (currentSelectionParentBounding?.width !== getBoundingRect([topLevelVerticalAutoLayoutFrame]).width) {
    //     rewrap(false, false, [topLevelVerticalAutoLayoutFrame]);
    //   }
    //   // @ts-ignore
    //   currentSelectionParentBounding = getBoundingRect([topLevelVerticalAutoLayoutFrame]);
    // }
    currentSelectionBounding = getBoundingRect([...figma.currentPage.selection])
  }
  selectedIds = figma.currentPage.selection.map(node => node.id).join("-");
}, 200)



export default async function editor() {
  // if (selectedTextNodes?.length > 1) {
  //   changeTab('batch-editor');
  // } else {
  //   changeTab('editor');
  // }
  showUI(windowSize.initial, { ...data.getData(), settings: await loadSettingsAsync(defaultPluginSetting), editorType: figma.editorType, fontsList: (await figma.listAvailableFontsAsync()).reduce((res: string[], font: Font) => res.includes(font.fontName.family) || font.fontName.style !== 'Regular' ? res : [...res, font.fontName.family], []) } as PluginData);
  figma.root.setRelaunchData({
    ui: ''
  });
}
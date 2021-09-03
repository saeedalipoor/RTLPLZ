import { loadFontsAsync } from "@create-figma-plugin/utilities";
import is from "../../utils/is";
import { kiddingMe } from "../../utils/kiddingMe";
import { findTextNodes, getTextNodeData, writeToNode } from "../../utils/textNode";

export default async function (close = true, notify = true, nodes?: SceneNode[]) {
  const textNodes = nodes ? findTextNodes(nodes) : findTextNodes([...figma.currentPage.selection])
  if (!textNodes.length) {
    if (close) {
      figma.closePlugin(
        "Select layer(s) with RTL characters and run again | Alt + Ctrl/Command + P"
      );
    } else {
      if (notify) {
        figma.notify("Select layer(s) with RTL characters and try again", {
          timeout: 2500,
        });
      }
      return;
    }
  }
  let rewrapedNodes = 0;
  let node;
  for (let i = 0; i < textNodes.length; i++) {
    try {
      node = <TextNode>textNodes[i];
      if (is.ltr(node.characters)) {
        continue;
      }
      if (node.textAutoResize !== "WIDTH_AND_HEIGHT") {
        await loadFontsAsync([node]);
        const nodeData = getTextNodeData(node);
        writeToNode({
          node,
          characters: nodeData.characters || node.characters
        });
        rewrapedNodes++;
      }
    } catch (error) {
      console.error(error);
    }
  }
  if (rewrapedNodes) {
    if (notify) {
      figma[close ? "closePlugin" : "notify"](
        `${rewrapedNodes > 1 ? rewrapedNodes + " " : ""}Layer${rewrapedNodes > 1 ? "s" : ""
        } Updated`,
        { timeout: 2500 }
      );
    }
    return;
  }
  if (notify) {
    kiddingMe(close);
  }
}

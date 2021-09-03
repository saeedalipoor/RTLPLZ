import { pluralize } from "@create-figma-plugin/utilities";
import is from "../../utils/is";
import { kiddingMe } from "../../utils/kiddingMe";
import { findTextNodes, getRTLPLZData, writeToNode } from "../../utils/textNode";
import { data } from "../editor/main";
import reset from '../reset/main';

export default async function (close = true, notify = true, nodes?: SceneNode[]) {
  const textNodes = (nodes ? findTextNodes(nodes) : findTextNodes([...figma.currentPage.selection])).filter(node => !is.ltr(node.characters))
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
  let reversedNodes = 0;
  for (const node of textNodes) {
    try {
      const RTLPLZData = getRTLPLZData(node);
      const fromData = RTLPLZData.current === node.characters && !!RTLPLZData.original
      if (fromData) {
        await reset(false, false, [node])
      } else {
        await data.updateSetting({});
        await writeToNode({ node, characters: node.characters });
      }
      reversedNodes++;
    } catch (error) {
      console.error(error);
    }
  }
  if (reversedNodes) {
    if (notify) {
      figma[close ? "closePlugin" : "notify"](`${pluralize(reversedNodes, 'One layer', `${reversedNodes} layers`)} Updated`,
        { timeout: 2500 }
      );
    }
    return;
  }
  if (notify) {
    kiddingMe(close);
  }
}

import { data } from "../commands/editor/main";
import { on } from "../utils/events";
import { writeToNode } from "../utils/textNode";


const editorTextChangeListener = () => on("EDITOR_TEXT_CHANGE", async ({ value, id }: { value: string, id?: string }) => {
  let characters = value;
  let selectedTextNodes = data.getData().selectedTextNodes.filter(node => !id || node.id === id);
  let selectedTextsForBatchEdit = data.getData().selectedTextsForBatchEdit;
  let calculatedData;
  if (data.getData().activeTab === "batch-editor" && !id && selectedTextsForBatchEdit) {
    selectedTextNodes = selectedTextsForBatchEdit;
  }
  for (const nodeData of selectedTextNodes) {
    let node = figma.getNodeById(nodeData.id) as TextNode;
    // if (figma.currentPage.selectedTextRange) {
    //   const { start, end } = figma.currentPage.selectedTextRange;
    //   characters = node.characters.slice(0, start) + RTLPLZ(value) + node.characters.slice(end);
    //   await writeToNode({ node, characters, reverse: false });
    // } else {
    // }

    if (node.textAutoResize === "WIDTH_AND_HEIGHT") {
      if (calculatedData) {
        await writeToNode({ node, characters: calculatedData });
      } else {
        calculatedData = await writeToNode({ node, characters: characters });
      }
    } else {
      await writeToNode({ node, characters: characters });
    }
  }
})

export default editorTextChangeListener;
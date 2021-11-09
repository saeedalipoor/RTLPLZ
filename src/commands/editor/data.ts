import { loadSettingsAsync } from "@create-figma-plugin/utilities";
import { defaultPluginSetting } from "../../constants";
import { emit, getDocumentPluginData } from "../../utils";
import { findTextNodes, getCharachtersForEditor, getTextNodeData } from "../../utils/textNode";


export default class Data {
  private selection: string[] = figma.currentPage.selection.map(node => node.id);
  private pageChildrenCount: number = figma.currentPage.children.length;
  private selectedTextNodes: TextNodeData[] = findTextNodes([...figma.currentPage.selection]).map(getTextNodeData);
  private selectedTextsForBatchEdit: TextNodeData[] | null = this.selectedTextNodes;
  private pluginData: PluginData = getDocumentPluginData({});
  private selectedTextRange;
  constructor() {
    (async () => {
      this.pluginData.settings = await loadSettingsAsync(defaultPluginSetting);
    })();
    if (this.selectedTextNodes.length > 1) {
      this.changeTab('batch-editor', false);
    } else {
      this.changeTab('editor', false);
    }
    this.selectedTextRange = figma.currentPage.selectedTextRange;
    // if (figma.currentPage.selectedTextRange) {
    //   this.selectedTextRange = figma.currentPage.selectedTextRange.node.characters.slice(figma.currentPage.selectedTextRange.start, figma.currentPage.selectedTextRange.end)
    // }
  }
  /**
   * changeTab
   */
  public changeTab(tab: Tabs, broadcast?: boolean) {
    this.pluginData.activeTab = tab;
    if (broadcast) {
      emit("TAB_CHANGE", tab)
    }
  }
  /**
   * updateSelecton
   */
  public updateSelecton() {
    this.pageChildrenCount = figma.currentPage.children.length;
    const newSelectedTextNodes = findTextNodes([...figma.currentPage.selection]).map(getTextNodeData);
    this.selection = figma.currentPage.selection.map(node => node.id);
    if (
      this.selectedTextNodes.map(n => n.id).join() !== newSelectedTextNodes.map(n => n.id).join()
      ||
      figma.currentPage.selection.length !== this.selection.length
    ) {
      // if (newSelectedTextNodes.length > 1) {
      //   this.selectedTextsForBatchEdit = newSelectedTextNodes;
      // } else {
      const recentIds = (this.selectedTextsForBatchEdit || []).map(n => n.id);
      if (newSelectedTextNodes.some(n => !recentIds.includes(n.id)) || this.selectedTextsForBatchEdit?.length === 1) {
        this.selectedTextsForBatchEdit = newSelectedTextNodes;
      }
      if (this.pluginData.activeTab === "editor" && newSelectedTextNodes.length === 0) {
        this.selectedTextsForBatchEdit = [];
      }
      // }
      this.selectedTextNodes = newSelectedTextNodes;
    }

    if (this.selectedTextsForBatchEdit) {
      this.selectedTextsForBatchEdit.forEach(node => {
        if (node.characters !== getCharachtersForEditor(figma.getNodeById(node.id) as TextNode)) {
          this.updateNodeData(node.id)
        }
      })
    }
    this.selectedTextRange = figma.currentPage.selectedTextRange;
    // if (this.pluginData.settings?.partialEdit && figma.currentPage.selectedTextRange && figma.currentPage.selectedTextRange.end - figma.currentPage.selectedTextRange.start < figma.currentPage.selectedTextRange.node.characters.length) {
    //   this.selectedTextRange = figma.currentPage.selectedTextRange.node.characters.slice(figma.currentPage.selectedTextRange.start, figma.currentPage.selectedTextRange.end)
    // } else {
    //   this.selectedTextRange = undefined;
    // }
    if (this.pluginData.settings?.autoSwitchToBatch && this.pluginData.activeTab?.includes("editor")) {
      if (this.selectedTextsForBatchEdit && this.selectedTextsForBatchEdit.length > 1 && this.selectedTextNodes.every(n => this.selectedTextsForBatchEdit?.map(n => n.id).includes(n.id))) {
        this.changeTab('batch-editor', true)
      } else {
        this.changeTab('editor', true)
      }
    }
  }
  /**
   * updateSetting
   */
  public async updateSetting(settings: PluginSettings) {
    if (!this.pluginData.settings) this.pluginData.settings = await loadSettingsAsync(defaultPluginSetting);
    this.pluginData.settings = { ...(this.pluginData.settings || {}), ...settings }
  }
  /**
   * updateNodeData
   */
  public updateNodeData(id: string) {
    const node = figma.getNodeById(id) as TextNode;
    const indexInSelectedTextNodes = this.selectedTextNodes.findIndex(node => node.id === id);
    const indexInselectedTextsForBatchEdit = this.selectedTextsForBatchEdit ? this.selectedTextsForBatchEdit.findIndex(node => node.id === id) : -1;
    if (node) {
      if (indexInSelectedTextNodes) this.selectedTextNodes[indexInSelectedTextNodes] = getTextNodeData(node)
      if (indexInselectedTextsForBatchEdit > -1 && this.selectedTextsForBatchEdit) this.selectedTextsForBatchEdit[indexInselectedTextsForBatchEdit] = getTextNodeData(node)
    }
    try {
      emit("SELECTION_CHANGE", this.getData())
    } catch (error) {
      // TODO: emit just when the ui is active
    }
  }
  /**
   * getData
   */
  public getData() {
    const { selection, selectedTextNodes, selectedTextsForBatchEdit, pageChildrenCount, pluginData, selectedTextRange } = this;
    return { selection, selectedTextNodes, selectedTextsForBatchEdit, pageChildrenCount, selectedTextRange, ...pluginData };
  }
}
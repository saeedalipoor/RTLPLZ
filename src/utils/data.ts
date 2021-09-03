const PLUGIN_NAME_SPACE = 'RTLPLZ';
const getData = async (defaultData: any) => {
  const data = await figma.clientStorage.getAsync(PLUGIN_NAME_SPACE);
  return data || defaultData;
};
const setData = async (value: PluginData) => {
  return await figma.clientStorage.setAsync(PLUGIN_NAME_SPACE, value)
}
const clearData = async () => await figma.clientStorage.setAsync(PLUGIN_NAME_SPACE, undefined);



const getNodePluginData = (node: SceneNode | BaseNode, defaultData: any, key?: string): { [key: string]: any } => {
  let data;
  try {
    data = JSON.parse(node.getSharedPluginData(PLUGIN_NAME_SPACE, key || 'data'));
  } catch (error) {
    data = undefined
  }
  return data || defaultData;
};
const setNodePluginData = (node: SceneNode | BaseNode, value: Object, key?: string) => {
  try {
    node.setSharedPluginData(PLUGIN_NAME_SPACE, key || 'data', Object.keys(value).length ? JSON.stringify(value) : '')
  } catch (error) {
    console.error(error)
  }
}
const clearNodePluginData = (node: SceneNode | BaseNode, key?: string) => node.setSharedPluginData(PLUGIN_NAME_SPACE, key || 'data', '');


const getDocumentPluginData = (defaultData: any, key?: string): { [key: string]: any } => getNodePluginData(figma.root, defaultData, key || 'setting')
const setDocumentPluginData = (value: Object, key?: string) => setNodePluginData(figma.root, value, key || 'setting')
const clearDocumentPluginData = (key?: string) => clearNodePluginData(figma.root, key || 'setting');

export {
  getData,
  setData,
  clearData,
  getNodePluginData,
  setNodePluginData,
  clearNodePluginData,
  getDocumentPluginData,
  setDocumentPluginData,
  clearDocumentPluginData,
};

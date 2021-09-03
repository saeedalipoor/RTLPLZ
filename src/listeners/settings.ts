import { emit, loadSettingsAsync, saveSettingsAsync } from "@create-figma-plugin/utilities";
import { data } from "../commands/editor/main";
import { defaultPluginSetting } from "../constants";
import { on } from "../utils/events";

const settingsListener = () => on("UPDATE_PLUGIN_SETTING", async (newSetting: { [key: string]: any }) => {
  const settings = { ...await loadSettingsAsync(defaultPluginSetting), ...newSetting };
  await saveSettingsAsync(settings)
  await data.updateSetting(settings);
  emit("UPDATE_PLUGIN_SETTING", settings);
})

export default settingsListener;
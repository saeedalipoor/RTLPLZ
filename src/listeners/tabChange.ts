import { data } from "../commands/editor/main";
import { on } from "../utils/events";

const tabChangeListener = () => on("TAB_CHANGE", (tab: Tabs) => {
  data.changeTab(tab, true);
})

export default tabChangeListener;
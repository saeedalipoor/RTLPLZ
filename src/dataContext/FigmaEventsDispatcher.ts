import { useDataDispatch } from '.';
import { on } from '../utils/events';

function FigmaEventsDispatcher() {
  const dispatch = useDataDispatch();
  on("TAB_CHANGE", payload => dispatch({ type: "TAB_CHANGE", payload }));
  on("SELECTION_CHANGE", payload => dispatch({ type: "SELECTION_CHANGE", payload }))
  on("UPDATE_PLUGIN_SETTING", payload => dispatch({ type: "UPDATE_PLUGIN_SETTING", payload }))
  return null;
}

export default FigmaEventsDispatcher

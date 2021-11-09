export default function dataReducer(
  state: any,
  action: { type: ActionType; payload?: any }
) {
  switch (action.type) {
    case "UPDATE_PLUGIN_SETTING":
      return {
        ...state,
        settings: action.payload
      }
    case "TAB_CHANGE":
      return {
        ...state,
        activeTab: action.payload
      }
    case "SELECTION_CHANGE":
      return {
        ...state,
        ...action.payload
      }
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

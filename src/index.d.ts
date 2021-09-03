type ActionType =
  "EDITOR_TEXT_CHANGE" |
  "RESIZE_WINDOW" |
  "TAB_CHANGE" |
  "SELECTION_CHANGE" |
  "NODE_TEXT_FOCUS" |
  "UPDATE_PLUGIN_SETTING" |
  "REVERSE"

type TextNodeData = {
  id: string
  name: string[]
  characters: string
  position: Vector
  figjamParentId?: string
}

type PluginSettings = {
  autoFocusOnSelectionChange?: boolean
  autoSwitchToBatch?: boolean
  liveWrap?: boolean
  suggestFormatting?: boolean
  partialEdit?: boolean
  autoHandoff?: boolean
  preferedFigjamFont?: string
}

interface PluginData {
  activeTab?: Tabs
  settings?: PluginSettings
  [key: string]: any
}

interface DataContext extends PluginData {
  selection?: string[]
  pageChildrenCount?: number
  selectedRange?: string
  selectedTextNodes: TextNodeData[]
  selectedTextsForBatchEdit?: TextNodeData[]
}
type RTLPLZData = {
  original: string
  current: string
  reshaped?: boolean
}
type Tabs = 'editor' | 'batch-editor' | 'filler' | 'support' | 'settings'
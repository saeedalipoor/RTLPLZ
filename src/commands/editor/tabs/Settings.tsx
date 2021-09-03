/** @jsx h */

import { Dropdown, DropdownOption, Textbox } from '@create-figma-plugin/ui';
import { h, JSX } from 'preact';
import CheckboxRow from '../../../components/CheckboxRow';
import TextField from '../../../components/TextField';
import { useDataState } from '../../../dataContext';
import { emit } from '../../../utils';

function Settings(): JSX.Element {
  const { settings, editorType, fontsList } = useDataState();
  return (
    <div style={{ overflow: 'hidden auto', maxHeight: '100%' }}>
      <CheckboxRow
        label="Live Wrap"
        description="When the plugin window is open, layer changes will be observed to fix RTL text wrapping automatically"
        value={Boolean(settings?.liveWrap)}
        id="live-wrap"
        onValueChange={(value) => emit("UPDATE_PLUGIN_SETTING", { liveWrap: value })}
      />
      <CheckboxRow
        label="Auto Switch to Batch Editor"
        description='Automatically switch to batch editor when more than one text layer is selected'
        value={Boolean(settings?.autoSwitchToBatch)}
        id="auto-batch"
        onValueChange={(value) => emit("UPDATE_PLUGIN_SETTING", { autoSwitchToBatch: value })}
      />
      <CheckboxRow
        label="Auto Focus"
        description="The editor automatically focuses when you select another layer or its parent. It could bother you when dragging over text layers to select or trying to undoing or redoing"
        value={Boolean(settings?.autoFocusOnSelectionChange)}
        id="auto-focus"
        onValueChange={(value) => emit("UPDATE_PLUGIN_SETTING", { autoFocusOnSelectionChange: value })}
      />
      {/* <CheckboxRow
        label="Auto Reshape"
        description="To prevent"
        value={Boolean(settings?.autoFocusOnSelectionChange)}
        id="auto-focus"
        onValueChange={(value) => emit("UPDATE_PLUGIN_SETTING", { autoFocusOnSelectionChange: value })}
      /> */}
      <CheckboxRow
        label={<div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Suggest Formatting</span><small style={{ fontWeight: 'normal', color: 'var(--color-black-30)' }}>Beta</small></div>}
        description="Select numbers in your text on the editor to view suggested formatted number and select"
        value={Boolean(settings?.suggestFormatting)}
        id="suggest-formatting"
        onValueChange={(value) => emit("UPDATE_PLUGIN_SETTING", { suggestFormatting: value })}
      />
      {/* <CheckboxRow
        label={<div style={{ display: 'flex', justifyContent: 'space-between' }}><span>RTL PLZ Handoff</span><small style={{ fontWeight: 'normal', color: 'var(--color-black-30)' }}>Coming soon</small></div>}
        description="Makes a hidden layer to handing off the original text to developers, checkout RTL PLZ Handoff plugin for now"
        value={Boolean(settings?.autoHandoff)}
        id="auto-handoff"
        // onValueChange={(value) => emit("UPDATE_PLUGIN_SETTING", { autoHandoff: value })}
        disabled
      /> */}
      {/* TODO: Make a component for this👇 */}
      {editorType === 'figjam' &&
        <CheckboxRow
          label={<div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Custom font for writing in FigJam</span><small style={{ fontWeight: 'normal', color: 'var(--color-black-30)' }}>FigJam only</small></div>}
          description={
            <select value={settings?.preferedFigjamFont || 'Tahoma'} onChange={e => emit("UPDATE_PLUGIN_SETTING", { preferedFigjamFont:e.currentTarget.value})} style={{padding: 4, border: '1px solid var(--color-silver)', borderRadius: '2px', marginTop: 4}}>
              {fontsList.map((f: string) => (
                <option key={f} value={f}>{f}</option>
              ))}
            </select>
          }
          value={Boolean(settings?.preferedFigjamFont)}
          id="prefered-figjam-font"
          noCheckbox
        />
      }
      {/* <CheckboxRow
        label={<div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Edit Selected Range</span><small style={{ fontWeight: 'normal', color: 'var(--color-black-30)' }}>Experimental</small></div>}
        description="When part of a text is selected, the editor shows just that portion for editing"
        value={Boolean(settings?.partialEdit)}
        id="partial-edit"
        onValueChange={(value) => emit("UPDATE_PLUGIN_SETTING", { partialEdit: value })}
      /> */}
    </div>
  )
}

export default Settings;
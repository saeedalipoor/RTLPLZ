/** @jsx h */

import { IconAdjust32 } from '@create-figma-plugin/ui';
import { h } from 'preact';
import Tabs from '../../components/Tabs';
import { useDataState } from '../../dataContext';
import { emit } from '../../utils';
import BatchEditor from './tabs/BatchEditor';
import Editor from './tabs/Editor';
// import Filler from './tabs/Filler';
import Settings from './tabs/Settings';
import Support from './tabs/Support';


function MainView() {
  const { activeTab } = useDataState();
  function handleTabChange(value: string) {
    emit("TAB_CHANGE", value)
  }
  return (
    <Tabs
      className="hidden-xs"
      options={[
        {
          value: 'editor',
          text: 'Editor',
          children: <Editor />,
        },
        {
          value: 'batch-editor',
          text: 'Batch Editor',
          children: <BatchEditor />,
        },
        // {
        //   value: 'filler',
        //   text: 'Filler',
        //   children: <Filler />,
        // },
        {
          value: 'support',
          text: <span style={{ margin: -8, display: 'block' }}><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 8.81128C9.79119 8.81128 7.99998 10.5841 7.99998 12.7713C7.99998 14.5369 8.69999 18.7273 15.5904 22.9633C15.7138 23.0384 15.8555 23.0781 16 23.0781C16.1445 23.0781 16.2862 23.0384 16.4096 22.9633C23.3 18.7273 24 14.5369 24 12.7713C24 10.5841 22.2088 8.81128 20 8.81128C17.7912 8.81128 16 11.2113 16 11.2113C16 11.2113 14.2088 8.81128 12 8.81128Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /></svg></span>,
          children: <Support />,
          className: 'ml-auto',
        },
        {
          value: 'settings',
          text: <span style={{ margin: -8, display: 'block' }}><IconAdjust32 /></span>,
          children: <Settings />,
        },
      ]}
      onValueChange={handleTabChange}
      value={activeTab || 'editor'}
    />
  )
}

export default MainView;
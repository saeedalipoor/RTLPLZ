/** @jsx h */

import { pluralize } from '@create-figma-plugin/utilities';
import { createFocusTrap, FocusTrap } from 'focus-trap';
import jss from 'jss';
import jssPluginCamelCase from 'jss-plugin-camel-case';
import jssPluginNested from 'jss-plugin-nested';
import { createRef, Fragment, h, JSX } from 'preact';
import { useCallback, useLayoutEffect, useMemo, useState } from 'preact/hooks';
import Textfield from '../../../components/TextField';
import { useDataState } from '../../../dataContext';
import { emit } from '../../../utils';
import StatusBar from '../StatusBar';

jss.use(
  jssPluginNested(),
  jssPluginCamelCase()
);

const { classes } = jss
  .createStyleSheet({
    root: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    },
    editor: {
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden auto'
    },
    empty: {
      color: 'var(--color-black-30)',
      fontSize: '14.6px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      maxWidth: '85vw',
      margin: 'auto',
      textAlign: 'center'
    },
    statusBar: {
      position: 'sticky',
      bottom: 0,
      zIndex: 1,
      marginTop: 'auto'
    }
  })
  .attach()

const inputRef = createRef();
const container = createRef();
let focusTrap: FocusTrap | undefined;

function BatchEditor(): JSX.Element {
  const { selectedTextsForBatchEdit, selectedTextNodes } = useDataState();
  const [trapActivated, setTrapActivated] = useState(false);
  const [sortTopLeft, setSortTopLeft] = useState(false)
  useLayoutEffect(() => {
    focusTrap = createFocusTrap(container.current, {
      allowOutsideClick: true,
      escapeDeactivates: false,
      onActivate: function () {
        setTrapActivated(true);
      }
    });
  }, [selectedTextsForBatchEdit]);
  const batchEditNodes = useMemo(() => {
    if (!selectedTextsForBatchEdit) return undefined;
    return selectedTextsForBatchEdit.sort((a, b) => sortTopLeft ? a.position.x - b.position.x : b.position.x - a.position.x).sort((a, b) => a.position.y - b.position.y)
  }, [selectedTextsForBatchEdit, sortTopLeft]);
  const handleInput = useCallback(
    (id: string) => (e: JSX.TargetedEvent<HTMLTextAreaElement>) => {
      emit("EDITOR_TEXT_CHANGE", { value: e.currentTarget.value, id })
    },
    [],
  )
  if (!batchEditNodes || !batchEditNodes.length) return <div class={classes.empty}>Select a group of text layers or their parents.<br />(up to 200)</div>
  return (
    <div class={classes.root}>
      <div class={classes.editor} ref={container}>
        {batchEditNodes.map((node, index) => (
          <Textfield
            key={node.id}
            value={node.characters}
            label={batchEditNodes.length > 1 ? node.name.map((name, index) => <Fragment key={`${index}-${index}`}><span style={{ flexShrink: index === node.name.length - 1 ? 0.5 : 1 }}>{name}</span><i style={{ flexShrink: 0, transform: 'rotate(-20deg)' }}>{index < node.name.length - 1 && '/'}</i></Fragment>) : undefined}
            ref={index === 0 ? inputRef : undefined}
            onFocus={() => {
              if (!trapActivated && focusTrap) focusTrap.activate();
              emit("NODE_TEXT_FOCUS", node.id);
            }}
            active={!document.hasFocus() && selectedTextNodes.length === 1 && selectedTextNodes.some(n => n.id === node.id)}
            onInput={handleInput(node.id)}
            extraActions={batchEditNodes.length > 1 ? [
              {
                label: `Apply to ${batchEditNodes.length - 1} other selected ${pluralize(batchEditNodes.length - 1, 'layer', 'layers')}`,
                onClick: (value) => emit("EDITOR_TEXT_CHANGE", { value })
              }
            ] : undefined}
          />
        ))}
      </div>
      {batchEditNodes.length > 0 &&
        <StatusBar className={classes.statusBar}>
          <div><span class="hidden-xs">Batch editing</span><span>{batchEditNodes.length} {pluralize(batchEditNodes.length, 'layer 🤨', 'layers')}</span></div>
          {batchEditNodes.length > 1 && <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }} onClick={() => setSortTopLeft(!sortTopLeft)}>
            <span class="hidden-xs">sort by postion</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: `rotateY(${sortTopLeft ? '0' : '180deg'})` }}>
              <path d="M4.42426 3.57574C4.18995 3.34142 3.81005 3.34142 3.57574 3.57574C3.34142 3.81005 3.34142 4.18995 3.57574 4.42426L4.42426 3.57574ZM12 12.6C12.3314 12.6 12.6 12.3314 12.6 12V6.6C12.6 6.26863 12.3314 6 12 6C11.6686 6 11.4 6.26863 11.4 6.6V11.4H6.6C6.26863 11.4 6 11.6686 6 12C6 12.3314 6.26863 12.6 6.6 12.6H12ZM3.57574 4.42426L11.5757 12.4243L12.4243 11.5757L4.42426 3.57574L3.57574 4.42426Z" fill="black" />
            </svg>
          </div>}
        </StatusBar>
      }
    </div>
  )
}
export default BatchEditor;


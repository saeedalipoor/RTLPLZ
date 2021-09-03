/** @jsx h */

import { Button } from '@create-figma-plugin/ui';
import { pluralize } from '@create-figma-plugin/utilities';
import jss from 'jss';
import jssPluginCamelCase from 'jss-plugin-camel-case';
import jssPluginNested from 'jss-plugin-nested';
import { createRef, h, JSX } from 'preact';
import { StateUpdater, useCallback, useEffect, useState } from 'preact/hooks';
import IconReverse16 from '../../../components/IconReverse16';
import Textfield from '../../../components/TextField';
import { useDataState } from '../../../dataContext';
import { emit } from '../../../utils';
import FormatterMenu from '../FormatterMenu';
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
      flexDirection: 'column',
    },
    editor: {
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden auto',
      flexGrow: 1
    },
    empty: {
      color: 'var(--color-black-30)',
      fontSize: '14.6px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      maxWidth: '80vw',
      margin: 'auto',
      textAlign: 'center'
    },
    statusBar: {
      position: 'sticky',
      bottom: 0,
      zIndex: 1,
      marginTop: 'auto'
    },
    reverseButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '2px',
      '&:hover': {
        color: 'var(--color-black-80)'
      },
      '& small': {
        height: 18
      },
      '&:not(:hover)': {
        '& small': {
          display: 'none'
        }
      }
    }
  })
  .attach()

const inputRef = createRef();
function Editor(): JSX.Element {
  const { selectedTextNodes, settings } = useDataState();
  const [firstFocused, setFirstFocused] = useState(false)
  const [formatMenuString, setFormatMenuString]: [[string, number, number], StateUpdater<[string, number, number]>] = useState(['', 0, 0])
  useEffect(() => {
    if ((!firstFocused || settings?.autoFocusOnSelectionChange) && inputRef.current && !document.hasFocus()) {
      setTimeout(() => {
        inputRef.current.focus();
        if (!firstFocused) setFirstFocused(true);
      }, 100);
    }
  }, [selectedTextNodes]);
  const handleInput = useCallback(
    (id?: string) => (e: JSX.TargetedEvent<HTMLTextAreaElement>) => {
      if (selectedTextNodes.length < 11) {
        handleTextUpdate(e.currentTarget.value);
      } else {
        handleTextUpdate(e.currentTarget.value, id);
      }
    },
    [selectedTextNodes],
  )
  const handleApplyToAll = useCallback(
    (e: JSX.TargetedEvent<HTMLButtonElement>) => {
      e.preventDefault();
      e.stopPropagation();
      handleTextUpdate(inputRef.current.value);
    },
    [],
  )
  const handleTextUpdate = useCallback(
    (value: string, id?: string) => {
      emit("EDITOR_TEXT_CHANGE", { value, id })
    },
    [],
  )
  const handleSelect = useCallback(
    (e: JSX.TargetedEvent<HTMLTextAreaElement>) => {
      // console.log(e.currentTarget.selectionStart, e.currentTarget.selectionEnd, e.currentTarget.selectionDirection)
      setFormatMenuString([e.currentTarget.value.slice(e.currentTarget.selectionStart, e.currentTarget.selectionEnd), e.currentTarget.selectionStart, e.currentTarget.selectionEnd])
    },
    []
  );
  const handleDeselect = useCallback(
    (e: JSX.TargetedEvent<HTMLTextAreaElement> | KeyboardEvent) => {
      if (e.type === "mousedown") setFormatMenuString(['', 0, 0]);
      if ((e as KeyboardEvent).key) {
        if (!["control", "alt", "meta", "shift"].includes((e as KeyboardEvent).key.toLowerCase())) setFormatMenuString(['', 0, 0]);
      }
    },
    []
  );
  const handleFormat = useCallback(
    (value: string) => {
      if (value) {
        inputRef.current.value = `${inputRef.current.value.slice(0, formatMenuString[1])}${value}${inputRef.current.value.slice(formatMenuString[2])}`;
      }
      handleTextUpdate(inputRef.current.value);
      setFormatMenuString(['', 0, 0])
    },
    [formatMenuString]
  );
  if (!selectedTextNodes || !selectedTextNodes.length) return <div class={classes.empty}>Select some layer(s)</div>
  let isTextsDifferent = selectedTextNodes.some(node => node.characters !== selectedTextNodes[0].characters);
  let firstNode = selectedTextNodes.sort((a, b) => a.position.x - b.position.x).sort((a, b) => a.position.y - b.position.y)[0];
  let characters = firstNode?.characters;
  return (
    <div class={classes.root}>
      <div class={classes.editor}>
        <Textfield
          value={isTextsDifferent && selectedTextNodes.length < 11 ? '' : characters}
          placeholder={selectedTextNodes.length > 1 ? `Write to ${selectedTextNodes.length < 11 ? selectedTextNodes.length + ' selected layers' : 'top-left selected layer'}` : ''}
          ref={inputRef}
          onInput={handleInput(firstNode.id)}
          active={false}
          onSelect={handleSelect}
          onBlur={handleDeselect}
          onMouseDown={handleDeselect}
          onKeyDown={handleDeselect}
          onFocus={handleDeselect}
          bottomActions={[
            {
              label: <div class={classes.reverseButton}><IconReverse16 width="24" height="24" /><small>Reverse text</small></div>,
              onClick: e => {e.stopPropagation();emit('REVERSE')}
            }
          ]}
        />
      </div>
      <div class={classes.statusBar}>
        {settings?.suggestFormatting && formatMenuString[0].trim() &&
          <FormatterMenu
            style={{ marginBottom: -8 }}
            string={formatMenuString[0]}
            onSelect={handleFormat}
            onClose={() => {
              inputRef.current.setSelectionRange(formatMenuString[2], formatMenuString[2]);
              inputRef.current.click();
            }} />
        }
        {selectedTextNodes.length > 0 && selectedTextNodes.length < 11 &&
          <StatusBar>
            <span>{selectedTextNodes.length} {pluralize(selectedTextNodes.length, 'text layer', 'text layers')} <span className="hidden-xs">will be updated</span></span>
          </StatusBar>
        }
        {selectedTextNodes.length > 10 &&
          <StatusBar>
            <span>1 text layer will be updated</span>
            <Button secondary style={{ height: '24px', lineHeight: '20px' }} onClick={handleApplyToAll}>Apply to {selectedTextNodes.length} layers</Button>
          </StatusBar>
        }
      </div>
    </div>
  )
}
export default Editor;
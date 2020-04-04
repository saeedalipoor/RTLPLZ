import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './ui.css'

const defaultText = 'Type Here...';
let editor, wrapCalc;
const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;

const App = () => {
  const [focused, setFocused] = React.useState(false);
  const [selectionCount, setSelectionCount] = React.useState(null);
  const editor = React.useRef(null);
  const setText = txt => editor.current.innerText = txt;
  onmessage = ({ data: { pluginMessage: data } }) => {
    switch (data.type) {
      case 'text':
        if (!focused && editor.current && editor.current.innerText !== data.msg) {
          setText(data.msg);
          // editor.current.focus();
          // document.execCommand('selectAll', false, null);
          // document.getSelection().collapseToEnd();
        }
        break;
      case 'selectionCount':
        if (data.msg !== 1) {
          setText('');
        }
        setSelectionCount(data.msg)
        break;
      default:
        break;
    }
  }
  const onEditorChange = e => {
    parent.postMessage({ pluginMessage: { type: 'input', payload: e.target.innerText.replace(/\n$/, '') } }, '*');
  }
  return (
    <>
      <div
        tabIndex={1}
        className="editor empty"
        contentEditable={selectionCount === 1}
        ref={editor}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onInput={onEditorChange}
        onPasteCapture={e => {
          e.preventDefault();
          var text = e.clipboardData.getData('text/plain');
          document.execCommand("insertHTML", false, text);
        }}
      >
      </div>
      {selectionCount !== null && selectionCount !== 1 &&
        <div className="empty-message">
          <div>Select {selectionCount === 0 ? 'a' : <strong>only one</strong>} text layer to edit</div>
        </div>
      }
      {/* <div className={`hint ${selectionCount === 1 ? 'hidden' : ''}`}>
        <div className="title">
          Help
        </div>
        <div>
          Shortcuts are available only when this window is focused.
        </div>
        <div className="shortcut">
          <span className="desc">Revert Selected Layer(s)</span>
          <span className="key-comb">
            <span className="key">
              {isMac ?
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg>
                :
                `Ctrl`
              }
            </span>
            <span className="key">
              R
            </span>
          </span>
        </div>
        <div className="shortcut">
          <span className="desc">Fix Text Wrapping</span>
          <span className="key-comb">
            <span className="key">
              {isMac ?
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg>
                :
                `Ctrl`
              }
            </span>
            <span className="key">
              L
            </span>
          </span>
        </div>
      </div> */}
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

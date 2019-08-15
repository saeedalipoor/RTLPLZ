import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './ui.css'

const defaultText = 'Type Here...';
let editor;
const App = () => {
  const [selectedLayer, setSelectedLayer] = React.useState();

  const SelectText = element => {
    if (!element)
      return;
    var range, selection;
    selection = window.getSelection();
    range = document.createRange();
    range.selectNodeContents(element);
    selection.removeAllRanges();
    selection.addRange(range);
  }
  const onEditorKeyDown = e => {
    if (e.keyCode === 65 && e.metaKey) {
      e.preventDefault();
      e.stopPropagation();
      SelectText(e.target)
    }
    if (e.keyCode === 82 && (e.metaKey || e.ctrlKey)) {
      parent.postMessage({ pluginMessage: { type: 'revert-text' } }, '*');
    }
    
  }
  const onEditorChange = e => {
    parent.postMessage({ pluginMessage: { type: 'revert-text', text: e.target.innerText } }, '*');
    if (e.keyCode === 65 && e.metaKey) {
      e.preventDefault();
      e.stopPropagation();
      SelectText(e.target)
    }
    editor.classList[!e.target.innerText ? 'add' : 'remove']('empty');
  }
  const updateEditor = text => {
    editor.classList[!text ? 'add' : 'remove']('empty');
    editor.innerText = text;
  }
  onmessage = (event) => {
    if (event.data.pluginMessage) {
      switch (event.data.pluginMessage.type) {
        case 'init':
          updateEditor(event.data.pluginMessage.msg);
          setSelectedLayer(event.data.pluginMessage.msg);
          break;
        case 'error':
          console.log(event.data.pluginMessage.msg)
          switch (event.data.pluginMessage.code) {
            case 1001:
              setSelectedLayer(undefined);
              updateEditor('');
              break;

            default:
              break;
          }
          break;
        case 'selected-layer':
          // if (!editor.innerText) {
          updateEditor(event.data.pluginMessage.msg);
          // }
          setSelectedLayer(event.data.pluginMessage.msg);
          break;
        default:
          break;
      }
    }
  }
  window.onload = () => {
    if (editor) {
      editor.focus();
    }
  }
  window.onfocus = () => {
    parent.postMessage({ pluginMessage: { type: 'get-selected-layer' } }, '*');
  }
  return (
    <>
      <div tabIndex={1} className="editor empty" contentEditable ref={node => editor = node} onKeyDown={onEditorKeyDown} onInput={onEditorChange} data-placeholder={selectedLayer !== undefined ? defaultText : ''}></div>
      {selectedLayer === undefined &&
        <div className="empty-message">
          <div>
            Select a text layer
          </div>
          <div style={{ fontSize: 17, margin: '10px 0 0', color: '#888' }}> then come back here
          </div>
        </div>
      }
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

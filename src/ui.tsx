import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './ui.css'

const defaultText = 'Type Here...';
let editor;
const App = () => {
  const [initialLayerData, setInitialLayerData] = React.useState()
  const onRevertCurrent = () => {
    parent.postMessage({ pluginMessage: { type: 'revert-text' } }, '*');
  }

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
  const exportText = () => {
    if (editor.innerText) {
      parent.postMessage({ pluginMessage: { type: 'export-text', text: editor.innerText } }, '*');
    }
  }
  const importText = () => {
    parent.postMessage({ pluginMessage: { type: 'import-text' } }, '*');
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
          setInitialLayerData(event.data.pluginMessage.msg);
          break;
        case 'error':
          console.log(event.data.pluginMessage.msg)
          break;
        case 'selected-layer':
          if (!editor.innerText) {
            updateEditor(event.data.pluginMessage.msg);
          }
          setInitialLayerData(event.data.pluginMessage.msg);
          break;
        default:
          break;
      }
    }
  }
  window.onload = () => {
    if (editor) editor.focus();
  }
  window.onfocus = () => {
    parent.postMessage({ pluginMessage: { type: 'get-selected-layer' } }, '*');
  }
  return (
    <>
      <header>
        <button id="create" onClick={onRevertCurrent} type="button">Revert Current Selection</button>
        <span>Or Use Live Editor Below</span>
      </header>
      <div tabIndex={1} className="editor empty" contentEditable ref={node => editor = node} onKeyDown={onEditorKeyDown} onInput={onEditorChange} data-placeholder={defaultText}></div>
      <div className="editor-actions">
        <button onClick={importText} disabled={!initialLayerData}>Import selected layer text</button>
        <button onClick={exportText} disabled={!editor || !editor.innerText}>Set selected layer text</button>
      </div>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

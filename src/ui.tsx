import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './ui.css'

const defaultText = 'Type Here...';
let editor, wrapCalc;
const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
const App = () => {
  const [selectedLayer, setSelectedLayer] = React.useState();
  const [wrapperStyles, setWrapperStyles] = React.useState();
  const [textIsToLarge, setTextIsToLarge] = React.useState();

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
    if (e.keyCode === 82 && (e.metaKey || e.ctrlKey)) { //ctrl|command + R
      parent.postMessage({ pluginMessage: { type: 'revert-text' } }, '*');
    }
    if (e.keyCode === 76 && (e.metaKey || e.ctrlKey)) { //ctrl|command + L
      if (editor.innerText.length > 2000) {
        setTextIsToLarge(true);
      }
      setTimeout(() => {
        editor.innerHTML = editor.innerHTML.replace(/&nbsp;/g, ' ').replace(/<br>/g, ' ');
        wrapCalc.innerHTML = editor.innerText.replace(/\r?\n|\r/g, ' ').split(' ').map(w => w.trim() && w !== '&nbsp;' ? '<span>' + w + '</span><span>&nbsp;</span>' : '<br />').join('');
        editor.innerHTML = '';
        let lastOffset = 0;
        wrapCalc.childNodes.forEach(node => {
          if (node.tagName === 'SPAN' && node.offsetTop > lastOffset) {
            lastOffset = node.offsetTop;
            editor.innerHTML = editor.innerHTML + '<br>';
          }
          editor.innerHTML = editor.innerHTML + (node.tagName === 'BR' ? '<br>' : node.innerHTML);
        });
        parent.postMessage({ pluginMessage: { type: 'revert-text', text: editor.innerText, single: true } }, '*');
        setTextIsToLarge(false);
      }, 100);
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
      setTextIsToLarge(false);
      switch (event.data.pluginMessage.type) {
        case 'init':
          updateEditor(event.data.pluginMessage.msg);
          setSelectedLayer(event.data.pluginMessage.msg);
          setWrapperStyles(event.data.pluginMessage.style);
          break;
        case 'error':
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
          setWrapperStyles(event.data.pluginMessage.style)
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
      <div className="wrap-calc" ref={node => wrapCalc = node} style={wrapperStyles}></div>
      <div tabIndex={1} className="editor empty" contentEditable ref={node => editor = node} onKeyDown={onEditorKeyDown} onInput={onEditorChange} data-placeholder={selectedLayer !== undefined ? defaultText : ''}></div>
      {selectedLayer === undefined &&
        <div className="empty-message">
          <div>Select text layer(s) to edit</div>
          <div style={{ fontSize: 17, margin: '10px 0px 0px', color: '#888' }}> then come back here</div>
        </div>
      }
      <div className={`hint ${selectedLayer !== undefined ? 'hidden' : ''}`}>
        <div className="title">
          Help
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
          <span className="desc">Fix Selected Text Wrapping</span>
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
      </div>
      {textIsToLarge && (
        <div className="empty-message">
          More than 2K characters<br />
          Stand up and do some exercise.
        </div>
      )}
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))


figma.showUI(__html__, { width: 380, height: 280 });

let text;
const parabicNumbers = /[\u06f0-\u06f9]|[\u0660-\u0669]/g;
const parabic = /[\u0600-\u08bd\s]/g;

let node = figma.currentPage.selection[0];
const revert = text => {
  return text.split(' ').map(word => {
    if (word.match(parabic)) {
      if (word.match(parabicNumbers)) {
        return word;
      }
      return word.split('').reverse().join('');
    }
    return word;
  }).reverse().join(" ");
}
const revertParagraph = p => {
  return p.split('\n').map(revert).join('\n');
}
if (node && node.type === 'TEXT') {
  figma.ui.postMessage({ type: 'init', msg: revertParagraph(node['characters']), nodeType: node.type });
  // figma.ui.postMessage(revertParagraph(node['characters']));
}
figma.loadFontAsync({ family: "Tahoma", style: "Regular" });
figma.ui.onmessage = msg => {
  node = figma.currentPage.selection[0];
  if (node && node.type === 'TEXT') {
    switch (msg.type) {
      case 'revert-text':
        node['characters'] = revertParagraph(msg.text !== undefined ? msg.text : node['characters'])
        if (msg.text === undefined) figma.closePlugin();
        break;
      case 'export-text':
        if(msg.text) node['characters'] = revertParagraph(msg.text);
        break;
      case 'import-text':
        figma.ui.postMessage({ type: 'init', msg: revertParagraph(node['characters'])});
        break;
      case 'get-selected-layer':
        figma.ui.postMessage({ type: 'selected-layer', msg: revertParagraph(node['characters']), nodeType: node.type });
        break;
      default:
        break;
    }
  } else {
    figma.ui.postMessage({ type: 'error', msg: 'Select some text layer to edit' });
  }
}
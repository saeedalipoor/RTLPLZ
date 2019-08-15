
figma.showUI(__html__, { width: 380, height: 280 });

let text;
const parabicNumbers = /[\u06f0-\u06f9]|[\u0660-\u0669]/g;
const parabic = /[\u0600-\u08bd\s]|[\ufe70-\ufefc]/g;

let node = figma.currentPage.selection[0];
const revert = text => {
  return text.split(' ').reduce((res, current) => {
    const lastItem = res[res.length - 1];
    const revertedCurrent = current.split('').reverse().join('');
    if (current.trim().match(parabic) && !current.trim().match(parabicNumbers)) {
      return res.concat(revertedCurrent);
    } else {
      if (!lastItem) {
        return res.concat(current);
      } else {
        if (!lastItem.replace(/ /g, '').match(parabic) || lastItem.match(parabicNumbers)) {
          return res.slice(0, res.length - 1).concat(lastItem + ' ' + current);
        }else{
          return res.concat(current);
        }
      }
    }
  }, []).reverse().join(' ');
}
const revertParagraph = p => {
  return p.split('\n').map(revert).join('\n');
}
if (node && node.type === 'TEXT') {
  figma.ui.postMessage({ type: 'init', msg: revertParagraph(node['characters']), nodeType: node.type });
}
figma.ui.onmessage = async msg => {
  node = figma.currentPage.selection[0];
  if (node && node.type === 'TEXT') {
    await figma.loadFontAsync(node.fontName as FontName);
    switch (msg.type) {
      case 'revert-text':
        node['characters'] = revertParagraph(msg.text !== undefined ? msg.text : node['characters']);
        if (msg.text === undefined) {
          figma.ui.postMessage({ type: 'init', msg: revertParagraph(node['characters']) });
        }
        break;
      case 'export-text':
        if (msg.text) node['characters'] = revertParagraph(msg.text);
        break;
      case 'import-text':
        figma.ui.postMessage({ type: 'init', msg: revertParagraph(node['characters']) });
        break;
      case 'get-selected-layer':
        figma.ui.postMessage({ type: 'selected-layer', msg: revertParagraph(node['characters']), notRtl: !node['characters'].replace(/ /g, '').match(parabic),nodeType: node.type });
        break;
      default:
        break;
    }
  } else {
    figma.ui.postMessage({ type: 'error', msg: 'Select a text layer to edit', code: 1001 });
  }
}
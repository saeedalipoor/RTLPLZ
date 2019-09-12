
figma.showUI(__html__, { width: 380, height: 280 });

let text;
const parabicNumbers = /[\u06f0-\u06f9]|[\u0660-\u0669]/g;
const parabic = /[\u0600-\u08bd\s]|[\ufe70-\ufefc]/g;
const superSubs = /[\u064b-\u065f]|[\u06D4-\u06DC]|[\u06DF-\u06E8]|[\u06EA-\u06ED]/g;
Array.prototype['swapItems'] = function (a, b) {
  this[a] = this.splice(b, 1, this[a])[0];
  return this;
}
let node = figma.currentPage.selection[0];
const revert = text => {
  return text.split(' ').reduce((res, word) => {
    const lastItem = res[res.length - 1];
    const revertedCurrent = word.split('').reverse();
    if (word.trim().match(parabic) && !word.trim().match(parabicNumbers)) {
      if (word.match(superSubs)) {
        word.match(superSubs).forEach(sym => {
          revertedCurrent.swapItems(revertedCurrent.indexOf(sym), revertedCurrent.indexOf(sym) + 1);
        });
        return res.concat(revertedCurrent.join(''))
      }
      return res.concat(revertedCurrent.join(''));
    } else {
      if (!lastItem) {
        return res.concat(word);
      } else {
        if (!lastItem.replace(/ /g, '').match(parabic) || lastItem.match(parabicNumbers)) {
          return res.slice(0, res.length - 1).concat(lastItem).concat(word);
        } else {
          return res.concat(word);
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
  const { selection } = figma.currentPage;
  node = selection[0];
  if (node && node.type === 'TEXT') {
    await figma.loadFontAsync(node.fontName as FontName);
    switch (msg.type) {
      case 'revert-text':
        if (selection.length > 1 && !msg.single) {
          selection.forEach(async node => {
            if (node.type !== 'TEXT') return;
            await figma.loadFontAsync(node.fontName as FontName);
            node['characters'] = revertParagraph(msg.text !== undefined ? msg.text : node['characters']);
            node['name'] = msg.text !== undefined ? msg.text : node['characters'];
          })
        } else {
          node['characters'] = revertParagraph(msg.text !== undefined ? msg.text : node['characters']);
          node['name'] = msg.text !== undefined ? msg.text : node['characters'];
          if (msg.text === undefined) {
            figma.ui.postMessage({ type: 'init', msg: revertParagraph(node['characters']) });
          }
        }
        break;
      case 'get-selected-layer':
        figma.ui.postMessage({
          type: 'selected-layer',
          msg: revertParagraph(node['characters']),
          notRtl: !node['characters'].replace(/ /g, '').match(parabic),
          nodeType: node.type,
          style: {
            fontFamily: node.fontName['family'],
            fontSize: node.fontSize,
            width: node.width
          }
        });
        break;
      default:
        break;
    }
  } else {
    figma.ui.postMessage({ type: 'error', msg: 'Select a text layer to edit', code: 1001 });
  }
}
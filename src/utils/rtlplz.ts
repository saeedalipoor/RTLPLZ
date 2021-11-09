import ArabicReshaper from "./convert-arabic";
import is from "./is";
import { BREAKS_RGX, NEUTRAL_CHARS_RGX } from "./regexes";
import { hasDifferenttextStyles } from "./textNode";

const BRACKETS: { [key: string]: string } = {
  "(": ")",
  "[": "]",
  "{": "}",
  "“": "”",
  "‘": "’",
  "‹": "›",
  "«": "»",
  "（": "）",
  "［": "］",
  "｛": "｝",
  "｟": "｠",
  "⦅": "⦆",
  "〚": " 〛",
  "⦃": "⦄",
  "「": "」",
  "〈": "〉",
  "《": "》",
  "【": "】",
  "〔": "〕",
  "⦗": "⦘",
  "『": "』",
  "〖": "〗",
  "〘": "〙",
  "｢": "｣",
  "⟦": "⟧",
  "⟨": "⟩",
  "⟪": "⟫",
  "⟮": "⟯",
  "⟬": "⟭",
  "⌈": "⌉",
  "⌊": "⌋",
  "⦇": "⦈",
  "⦉": "⦊",
  "❛": "❜",
  "❝": "❞",
  "❨": "❩",
  "❪": "❫",
  "❴": "❵",
  "❬": "❭",
  "❮": "❯",
  "❰": "❱",
  "❲": "❳",
  "﴾": "﴿",
  "〈": "〉",
  "⦑": "⦒",
  "⧼": "⧽",
  "﹙": "﹚",
  "﹛": "﹜",
  "﹝": "﹞",
  "⁽": "⁾",
  "₍": "₎",
  "⦋": "⦌",
  "⦍": "⦎",
  "⦏": "⦐",
  "⁅": "⁆",
  "⸢": "⸣",
  "⸤": "⸥",
  "⟅": "⟆",
  "⦓": "⦔",
  "⦕": "⦖",
  "⸦": "⸧",
  "⸨": "⸩",
  "⧘": "⧙",
  "⧚": "⧛",
  "᚛": "᚜",
  "༺": "༻",
  "༼": "༽",
  "⸉": "⸊",
  "⸂": "⸃",
  "⸄": "⸅",
  "⊆": "⊇",
  "<": ">"
}

function braceDetail(char: string) {
  if (!mirrorBracket(char)) return null;
  return {
    position: !!BRACKETS[char] ? 'left' : 'right',
    mirrored: mirrorBracket(char)
  }
}

function mirrorBracket(char: string) {
  return BRACKETS[char] || Object.keys(BRACKETS)[Object.values(BRACKETS).indexOf(char)]
}

function getNeutralRange(array: string[], start?: number) {
  const range = [start !== undefined ? start : array.findIndex(char => is.neutral(char))];
  for (let [index, char] of array.entries()) {
    if (!is.neutral(char)) break;
    range[1] = Number(index);
  }
  return range;
}
// const getDirection = (char: string | undefined | null): 'rtl' | 'ltr' | null => {
//   if (!char) return null;
//   if (is.rtl(char)) {
//     return "rtl";
//   } else if (is.neutral(char) || isBracket(char)) {
//     return null;
//   } else {
//     return "ltr"
//   }
// }

// const processWord = (word: string): string => {
//   const match = word.match(RTLRGX);
//   if (!match) return word;
//   if (match?.length === word.length) return word.split("").reverse().join("")
//   let ltr: boolean;
//   if (!word[0].match(RTLRGX)) ltr = true;
//   return word.split("").reduce((w: string[], char: string, index) => {
//     if (!index) return [char];
//     if (!w.join("").match(RTLRGX)) return [...w, char];
//     if (ltr && char.match(RTLRGX)) {
//       const lastLtrIndex = w.length - [...w].reverse().findIndex(c => !c.match(RTLRGX));
//       console.log([...w].reverse().findIndex(c => !c.match(RTLRGX)), [...w].reverse())
//       return [...w.slice(0, lastLtrIndex), char, ...w.slice(lastLtrIndex)]
//     }
//     if (char.match(NEUTRAL_CHARS) && w.slice(-1)[0].match(RTLRGX) && index === word.length - 1) return [char, ...w]
//     if (char.match(RTLRGX) || word[index - 1].match(RTLRGX)) return [char, ...w];
//     const lastRtlIndex = w.findIndex(c => !!c.match(RTLRGX))
//     return [...w.slice(0, lastRtlIndex), char, ...w.slice(lastRtlIndex)]
//   }, []).join("");
// }


const typeOfChar = (char: string): 'rtl' | 'ltr' | 'neutral' | undefined => {
  if (!char) return undefined;
  if (is.rtl(char)) return 'rtl';
  if (is.neutral(char) || is.bracket(char)) return 'neutral';
  return 'ltr';
}
const processLine = (line: string): string => {
  if (is.ltr(line)) return line;
  let result: string[] = [];
  let lineDir = line.indexOf(figfa) === 0 ? 'rtl' : typeOfChar(line.split("").find(c => !(is.bracket(c) || is.neutral(c) || is.faArDigit(c) || c.match(/[0-9]/g))) || '');
  const rawLine = line.replaceAll(figfa, '');
  let dir = String(lineDir);
  let lastChar: [string, number] = ['', 0];
  for (const [index, character] of rawLine.split('').entries()) {
    if (index === 0 && !is.bracket(character)) {
      result.push(character);
      lastChar = [character, 0];
      dir = typeOfChar(character) === 'rtl' ? 'rtl' : 'ltr';
      continue;
    }

    if (is.specialAr(character)) {
      if (is.rtl(lastChar[0])) {
        result.splice(lastChar[1] + 1, 0, character)
      } else {
        result.unshift(character);
      }
      continue;
    }


    if (is.bracket(character)) {
      const mirrored = mirrorBracket(character)

      if (lastChar[0] === character) {
        result.unshift(mirrored);
        lastChar = [mirrored, 0];
        continue;
      }
      result.unshift(mirrored);
      lastChar = [mirrorBracket(mirrored), 0];
      continue;
    }

    if (is.bracket(lastChar[0]) && is.neutral(character)) {
      result.unshift(character);
      lastChar = [character, 0];
      continue;
    }

    switch (typeOfChar(character)) {
      case 'rtl':
        if (lineDir === 'rtl') {
          result.unshift(character);
          dir = 'rtl';
          lastChar = [character, 0];
        } else {
          if (dir === 'rtl') {
            result = [...result.slice(0, lastChar[1] - 1), character, ...result.slice(lastChar[1] - 1)];
            lastChar[0] = character;
          } else {
            result.push(character);
            lastChar = [character, result.length];
          }
        }
        dir = 'rtl';
        continue;
      case 'ltr':
        if (lineDir === 'ltr') {
          result.push(character);
          lastChar = [character, result.length - 1];
        } else {
          if (dir === 'rtl') {
            result.unshift(character);
            lastChar = [character, 0];
          } else {
            if (is.neutral(lastChar[0]) && lastChar[1] === 0) {
              result.unshift(character);
              lastChar = [character, 0];
            } else {
              result = [...result.slice(0, lastChar[1] > 1 ? lastChar[1] : 1), character, ...result.slice(lastChar[1] > 1 ? lastChar[1] : 1)];
              lastChar = [character, (lastChar[1] > 1 ? lastChar[1] : 1) + 1];
            }
          }
        }
        dir = 'ltr';
        continue
      case 'neutral':
        if (lineDir === 'rtl') {
          if (dir === 'rtl' || index === rawLine.length - 1 || rawLine.slice(index + 1).match(NEUTRAL_CHARS_RGX)?.length === rawLine.slice(index + 1).length || is.rtl(rawLine[index + 1])) {
            result.unshift(character);
            lastChar = [character, 0];
          } else {
            result = [...result.slice(0, lastChar[1] > 1 ? lastChar[1] : 1), character, ...result.slice(lastChar[1] > 1 ? lastChar[1] : 1)];
            lastChar = [character, (lastChar[1] > 1 ? lastChar[1] : 1) + 1];
          }
        } else {
          if (dir === 'ltr' || index === rawLine.length - 1) {
            result.push(character);
            lastChar = [character, result.length - 1];
          } else {
            result = [...result.slice(0, lastChar[1]), character, ...result.slice(lastChar[1])];
            lastChar[0] = character
          }
        }
        continue;
    }
  }
  return result.join("");
}


const isLastItem = (index: number, length: number) => index === length - 1;

const figfa = 'فیگفا';

const setNodeCharacters = (node: NodesWithText, characters: string) => {
  if (node.type === "TEXT") return node.characters = characters;
  node.text.characters = characters;
}

const wrapLines = (characters: string, node: NodesWithText) => {
  // @ts-ignore
  let tempNode = <NodesWithText>node.clone();
  let blank = "";
  tempNode.visible = false;
  if (node.type === "CONNECTOR") return characters;
  if (node.type === "TEXT") {
    (tempNode as TextNode)["textAutoResize"] = "HEIGHT";
  }
  setNodeCharacters(tempNode, blank);
  let tempNodeInitialHeight = tempNode.height;
  if (tempNode.type === "STICKY" || tempNode.type === "SHAPE_WITH_TEXT") {
    while (tempNode.height === tempNodeInitialHeight) {
      setNodeCharacters(tempNode, tempNode.text.characters + '\n')
    }
    blank = tempNode.text.characters.split('').slice(0, -1).join('');
  }
  if (tempNode.type === "TEXT") (tempNode as TextNode).characters = "";
  const result: string = characters
    .split("\n")
    .map(line =>
      line
        .replace(/\u0020+$/g, "")
        .replace(/\r?\n|\r/g, " ")
        .split(" ")
        .reduce((res: string[], word: string) => {
          const nWord = word.replace(/\u00A0+$/, " ");
          const currentLine = res.lastIndexOf('\u2028') > -1 ? res.slice(res.lastIndexOf('\u2028') + 2) : res; // +2: 1 for figfa and 1 for linebreak
          const characters = [...(currentLine.join('').replace(figfa, '').split('')), ...(currentLine.length ? [" "] : []), nWord].join("");
          setNodeCharacters(tempNode, blank + characters.split(' ').map(w => w.split('').reverse().join('')).join(' '));
          if (tempNode.height > tempNodeInitialHeight) {
            setNodeCharacters(tempNode, blank);
            return [...res.filter((w, i) => !(w === `\u2028${figfa}` && i + 1 === res.length)), '\u2028', figfa, nWord];
          }
          return [...res, ...(res.length ? [" "] : []), nWord];
        }, [])
        .join("")
    )
    .map(line => line.split("\u2028" + figfa).reverse().join("\u2028"))
    .join("\n");
  tempNode.remove();
  return result;
}

export default function RTLPLZ(input: string, node?: NodesWithText, reshape?: boolean, wrap?: boolean) {
  if (!input || !input.trim() || is.ltr(input)) return input;
  let characters = input.replace(BREAKS_RGX, '\n');
  let result: string[] = [];
  let wrapped: string | undefined;


  if (node && node.type !== 'CONNECTOR' && wrap) {
    if (node.type === 'STICKY' || node.type === 'SHAPE_WITH_TEXT' || node.textAutoResize !== 'WIDTH_AND_HEIGHT') {
      wrapped = wrapLines(characters, node);
    }
  }
  for (const line of (wrapped || characters).split('\n')) {
    result.push(processLine(line))
  }

  const shouldReshape = reshape && ((!!node && hasDifferenttextStyles(node)) || is.ltr(result[0].split('').filter(c => !is.faArDigit(c) && !c.match(/\d/) && !is.neutral(c) && !is.bracket(c))[0]))
  return result
    .map(line => {
      if (shouldReshape) return line.split(" ").map(word => ArabicReshaper.convertArabic(word.split("").reverse().join("")).split("").reverse().join("")).join(" ")
      return line;
    })
    .join('\n');

}
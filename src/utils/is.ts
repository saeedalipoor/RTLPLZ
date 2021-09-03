import { BRACE_RGX, BREAKS_RGX, DIACRITIC_RGX, FA_AR_DIGITS_RGX, NEUTRAL_CHARS_RGX, RTL_RGX, WHITE_SPACE_CHARS_RGX } from "./regexes";

const is = {
  rtl: (char: string): boolean => !!char && char.match(RTL_RGX)?.length === char.length,
  neutral: (char: string): boolean => !!char && char.match(NEUTRAL_CHARS_RGX)?.length === char.length,
  ltr: (char: string): boolean => !!char && char.match(RTL_RGX) === null,
  faArDigit: (char: string): boolean => !!char && char.match(FA_AR_DIGITS_RGX)?.length === char.length,
  specialAr: (char: string): boolean => !!char && char.match(DIACRITIC_RGX)?.length === char.length,
  whiteSpace: (char: string): boolean => !!char && char.match(WHITE_SPACE_CHARS_RGX)?.length === char.length,
  lineBreak: (char: string): boolean => !!char && char.match(BREAKS_RGX)?.length === char.length,
  bracket: (char: string): boolean => !!char && char.match(BRACE_RGX)?.length === char.length,
}

export default is;
// https://en.wikipedia.org/wiki/Right-to-left_script
// To match just the RTL getCharachtersForEditor, it doesn't match with digits or neutral characters

export const RTL_RGX: RegExp = /[\u200F\u202B\u202E\u2067]|[\u0608\u060b\u060d\u061b]|[\u061d-\u065f]|[\u066d-\u066f]|[\u0671-\u0673]|[\u0675-\u06d5]|[\u06e5\u06e6\u06ee\u06ef]|[\u06fa-\u06ff]|[\u0750-\u077f]|[\u08a0-\u08ff]|[\ufb50–\ufdff]|[\ufe70-\ufeff]|[\ud803\ud83a\ud83b]|[\ude60–\ude7f]|[\udc70–\udcbf]|[\udd00–\udd4f]|[\ufe00–\udeff]|[\u0590-\u05ff]|[\ufb1d-\ufb4f]|[\u0780–\u07bf]|[\u0840–\u085f]|[\u0800–\u083f]|[\ud800–\ud8df]|[\u07c0–\u07ff]|[\ue900–\udd5f]|[\udd00-\udd3f]/g

export const RTL_WORD_RGX: RegExp = /([\u0608\u060b\u060d\u061b]|[\u061d-\u065f]|[\u066d-\u066f]|[\u0671-\u0673]|[\u0675-\u06d5]|[\u06e5\u06e6\u06ee\u06ef]|[\u06fa-\u06ff]|[\u0750-\u077f]|[\u08a0-\u08ff]|[\ufb50–\ufdff]|[\ufe70–\ufeff]|[\ud803\ud83a\ud83b]|[\ude60–\ude7f]|[\udc70–\udcbf]|[\udd00–\udd4f]|[\ufe00–\udeff]|[\u0590-\u05ff]|[\ufb1d-\ufb4f]|[\u0780–\u07bf]|[\u0840–\u085f]|[\u0800–\u083f]|[\ud800–\ud8df]|[\u07c0–\u07ff]|[\ue900–\udd5f]|[\udd00-\udd3f])+([\u200c\u180e\u200b\ufeff]|[-.,:;"'?؟٪×،٫٬*.])*([\u0608\u060b\u060d\u061b]|[\u061d-\u065f]|[\u066d-\u066f]|[\u0671-\u0673]|[\u0675-\u06d5]|[\u06e5\u06e6\u06ee\u06ef]|[\u06fa-\u06ff]|[\u0750-\u077f]|[\u08a0-\u08ff]|[\ufb50–\ufdff]|[\ufe70–\ufeff]|[\ud803\ud83a\ud83b]|[\ude60–\ude7f]|[\udc70–\udcbf]|[\udd00–\udd4f]|[\ufe00–\udeff]|[\u0590-\u05ff]|[\ufb1d-\ufb4f]|[\u0780–\u07bf]|[\u0840–\u085f]|[\u0800–\u083f]|[\ud800–\ud8df]|[\u07c0–\u07ff]|[\ue900–\udd5f]|[\udd00-\udd3f])*[-.,:;"'?؟٪×،٫٬*.]*/g

export const NON_RTL_WORD_RGX: RegExp = /([\u0608\u060b\u060d\u061b]|[\u061d-\u065f]|[\u066d-\u066f]|[\u0671-\u0673]|[\u0675-\u06d5]|[\u06e5\u06e6\u06ee\u06ef]|[\u06fa-\u06ff]|[\u0750-\u077f]|[\u08a0-\u08ff]|[\ufb50–\ufdff]|[\ufe70–\ufeff]|[\ud803\ud83a\ud83b]|[\ude60–\ude7f]|[\udc70–\udcbf]|[\udd00–\udd4f]|[\ufe00–\udeff]|[\u0590-\u05ff]|[\ufb1d-\ufb4f]|[\u0780–\u07bf]|[\u0840–\u085f]|[\u0800–\u083f]|[\ud800–\ud8df]|[\u07c0–\u07ff]|[\ue900–\udd5f]|[\udd00-\udd3f])+/g

export const DIACRITIC_RGX: RegExp = /[\u064b-\u065f]|[\u06d4-\u06dc]|[\u06df-\u06e8]|[\u06ea-\u06ed]/g

export const WHITE_SPACE_CHARS_RGX: RegExp = /[\u0020\u00a0\u1680\u180e]|[\u2000-\u200c]|[\u202f\u205f\u3000\ufeff\u2028\u2029\u000a\u000b\u000d\u0009]/g

export const NEUTRAL_CHARS_RGX: RegExp = /[-.,:;=+_&#$@!"'?؟٪×،٫؛÷٬*.–]|[\u0020\u00a0\u1680\u180e]|[\u2000-\u200c]|[\u202f\u205f\u3000\ufeff\u2028\u2029\u000a\u000b\u000d\u0009]|\||\/|\\/g

export const BREAKS_RGX: RegExp = /\r?\n|[\r\n]|[\025\036\u0015\u009B\u2028]/g;

export const FA_AR_DIGITS_RGX: RegExp = /[\u06f0-\u06f9]|[\u0660-\u066c]/g;

export const BRACE_RGX: RegExp = /[()\[\]\{\}\“\”\‘\’‹›«»（）［］｛｝｟｠⦅⦆〚〛⦃⦄「」〈〉《》【】〔〕⦗⦘『』〖〗〘〙｢｣⟦⟧⟨⟩⟪⟫⟮⟯⟬⟭⌈⌉⌊⌋⦇⦈⦉⦊❛❜❝❞❨❩❪❫❴❵❬❭❮❯❰❱❲❳﴾﴿〈〉⦑⦒⧼⧽﹙﹚﹛﹜﹝﹞⁽⁾₍₎⦋⦌⦍⦎⦏⦐⁅⁆⸢⸣⸤⸥⟅⟆⦓⦔⦕⦖⸦⸧⸨⸩⧘⧙⧚⧛᚛᚜༺༻༼༽⸉⸊⸂⸃⸄⸅⊆⊇<>]/g;
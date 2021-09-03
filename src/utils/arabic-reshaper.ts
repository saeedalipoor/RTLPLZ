// This work is licensed under the GNU Public License (GPL).

// Written by Nick Doiron (@mapmeld)
// Ported from python-arabic-reshaper by Abdullah Diab (mpcabd)
// Which was ported and tweaked from Java to Python, from Better Arabic Reshaper
// [https://github.com/agawish/Better-Arabic-Reshaper/]

export const LIGATURES: { matches: string[], forms: { isolated?: string, final?: string, initial?: string, medial?: string }}[] = [
  // Sentences
  // Ligature BISMILLAH AR-RAHMAN AR-RAHEEM
  {
    matches: [
      '\u0628\u0633\u0645\u0020',
      '\u0627\u0644\u0644\u0647\u0020',
      '\u0627\u0644\u0631\u062D\u0645\u0646\u0020',
      '\u0627\u0644\u0631\u062D\u064A\u0645'
    ],
    forms: { isolated: '\uFDFD' }
  },
  // Ligature JALLAJALALOUHOU
  {
    matches: ['\u062C\u0644\u0020\u062C\u0644\u0627\u0644\u0647'],
    forms: { isolated: '\uFDFB' }
  },
  // Ligature SALLALLAHOU ALAYHE WASALLAM
  {
    matches: [
      '\u0635\u0644\u0649\u0020',
      '\u0627\u0644\u0644\u0647\u0020',
      '\u0639\u0644\u064A\u0647\u0020',
      '\u0648\u0633\u0644\u0645'
    ],
    forms: { isolated: '\uFDFA' }
  },

  // Words
  // Ligature ALLAH
  {
    matches: ['\u0627\u0644\u0644\u0647'],
    forms: { isolated: '\uFDF2' }
  },
  //Ligature AKBAR
  {
    matches: ['\u0623\u0643\u0628\u0631'],
    forms: { isolated: '\uFDF3' }
  },
  // Ligature ALAYHE
  {
    matches: ['\u0639\u0644\u064A\u0647'],
    forms: { isolated: '\uFDF7' }
  },
  // Ligature MOHAMMAD
  {
    matches: ['\u0645\u062D\u0645\u062F'],
    forms: { isolated: '\uFDF4' }
  },
  // Ligature RASOUL
  {
    matches: ['\u0631\u0633\u0648\u0644'],
    forms: { isolated: '\uFDF6' }
  },
  // Ligature SALAM
  {
    matches: ['\u0635\u0644\u0639\u0645'],
    forms: { isolated: '\uFDF5' }
  },
  // Ligature SALLA
  {
    matches: ['\u0635\u0644\u0649'],
    forms: { isolated: '\uFDF9' }
  },
  // Ligature WASALLAM
  {
    matches: ['\u0648\u0633\u0644\u0645'],
    forms: { isolated: '\uFDF8' }
  },
  // RIAL SIGN
  {
    matches: ['\u0631[\u06CC\u064A]\u0627\u0644'],
    forms: { isolated: '\uFDFC' }
  },

  // Letters

  // Ligature AIN WITH ALEF MAKSURA
  {
    matches: ['\u0639\u0649'],
    forms: { isolated: '\uFCF7', final: '\uFD13' }
  },
  // Ligature AIN WITH JEEM
  {
    matches: ['\u0639\u062C'],
    forms: { isolated: '\uFC29', initial: '\uFCBA' }
  },
  // Ligature AIN WITH JEEM WITH MEEM
  {
    matches: ['\u0639\u062C\u0645'],
    forms: { initial: '\uFDC4', final: '\uFD75' }
  },
  // Ligature AIN WITH MEEM
  {
    matches: ['\u0639\u0645'],
    forms: { isolated: '\uFC2A', initial: '\uFCBB' }
  },
  // Ligature AIN WITH MEEM WITH ALEF MAKSURA
  {
    matches: ['\u0639\u0645\u0649'],
    forms: { final: '\uFD78' }
  },
  // Ligature AIN WITH MEEM WITH MEEM
  {
    matches: ['\u0639\u0645\u0645'],
    forms: { initial: '\uFD77', final: '\uFD76' }
  },
  // Ligature AIN WITH MEEM WITH YEH
  {
    matches: ['\u0639\u0645\u064A'],
    forms: { final: '\uFDB6' }
  },
  // Ligature AIN WITH YEH
  {
    matches: ['\u0639\u064A'],
    forms: { isolated: '\uFCF8', final: '\uFD14' }
  },
  // Ligature ALEF MAKSURA WITH SUPERSCRIPT ALEF
  {
    matches: ['\u0649\u0670'],
    forms: { isolated: '\uFC5D', final: '\uFC90' }
  },
  // Ligature ALEF WITH FATHATAN
  {
    matches: ['\u0627\u064B'],
    forms: { isolated: '\uFD3D', final: '\uFD3C' }
  },
  // Ligature BEH WITH ALEF MAKSURA
  {
    matches: ['\u0628\u0649'],
    forms: { isolated: '\uFC09', final: '\uFC6E' }
  },
  // Ligature BEH WITH HAH
  {
    matches: ['\u0628\u062D'],
    forms: { isolated: '\uFC06', initial: '\uFC9D' }
  },
  // Ligature BEH WITH HAH WITH YEH
  {
    matches: ['\u0628\u062D\u064A'],
    forms: { final: '\uFDC2' }
  },
  // Ligature BEH WITH HEH
  {
    matches: ['\u0628\u0647'],
    forms: { initial: '\uFCA0', medial: '\uFCE2' }
  },
  // Ligature BEH WITH JEEM
  {
    matches: ['\u0628\u062C'],
    forms: { isolated: '\uFC05', initial: '\uFC9C' }
  },
  // Ligature BEH WITH KHAH
  {
    matches: ['\u0628\u062E'],
    forms: { isolated: '\uFC07', initial: '\uFC9E' }
  },
  // Ligature BEH WITH KHAH WITH YEH
  {
    matches: ['\u0628\u062E\u064A'],
    forms: { final: '\uFD9E' }
  },
  // Ligature BEH WITH MEEM
  {
    matches: ['\u0628\u0645'],
    forms: { isolated: '\uFC08', initial: '\uFC9F', medial: '\uFCE1', final: '\uFC6C' }
  },
  // Ligature BEH WITH NOON
  {
    matches: ['\u0628\u0646'],
    forms: { final: '\uFC6D' }
  },
  // Ligature BEH WITH REH
  {
    matches: ['\u0628\u0631'],
    forms: { final: '\uFC6A' }
  },

  // Ligature AIN WITH ALEF MAKSURA
  {
    matches: ['\u0639\u0649'],
    forms: { isolated: '\uFCF7', final: '\uFD13' }
  },
  // Ligature AIN WITH JEEM
  {
    matches: ['\u0639\u062C'],
    forms: { isolated: '\uFC29', initial: '\uFCBA' }
  },
  // Ligature AIN WITH JEEM WITH MEEM
  {
    matches: ['\u0639\u062C\u0645'],
    forms: { initial: '\uFDC4', final: '\uFD75' }
  },
  // Ligature AIN WITH MEEM
  {
    matches: ['\u0639\u0645'],
    forms: { isolated: '\uFC2A', initial: '\uFCBB' }
  },
  // Ligature AIN WITH MEEM WITH ALEF MAKSURA
  {
    matches: ['\u0639\u0645\u0649'],
    forms: { final: '\uFD78' }
  },
  // Ligature AIN WITH MEEM WITH MEEM
  {
    matches: ['\u0639\u0645\u0645'],
    forms: { initial: '\uFD77', final: '\uFD76' }
  },
  // Ligature AIN WITH MEEM WITH YEH
  {
    matches: ['\u0639\u0645\u064A'],
    forms: { final: '\uFDB6' }
  },
  // Ligature AIN WITH YEH
  {
    matches: ['\u0639\u064A'],
    forms: { isolated: '\uFCF8', final: '\uFD14' }
  },
  // Ligature ALEF MAKSURA WITH SUPERSCRIPT ALEF
  {
    matches: ['\u0649\u0670'],
    forms: { isolated: '\uFC5D', final: '\uFC90' }
  },
  // Ligature ALEF WITH FATHATAN
  {
    matches: ['\u0627\u064B'],
    forms: { isolated: '\uFD3D', final: '\uFD3C' }
  },
  // Ligature BEH WITH ALEF MAKSURA
  {
    matches: ['\u0628\u0649'],
    forms: { isolated: '\uFC09', final: '\uFC6E' }
  },
  // Ligature BEH WITH HAH
  {
    matches: ['\u0628\u062D'],
    forms: { isolated: '\uFC06', initial: '\uFC9D' }
  },
  // Ligature BEH WITH HAH WITH YEH
  {
    matches: ['\u0628\u062D\u064A'],
    forms: { final: '\uFDC2' }
  },
  // Ligature BEH WITH HEH
  {
    matches: ['\u0628\u0647'],
    forms: { initial: '\uFCA0', medial: '\uFCE2' }
  },
  // Ligature BEH WITH JEEM
  {
    matches: ['\u0628\u062C'],
    forms: { isolated: '\uFC05', initial: '\uFC9C' }
  },
  // Ligature BEH WITH KHAH
  {
    matches: ['\u0628\u062E'],
    forms: { isolated: '\uFC07', initial: '\uFC9E' }
  },
  // Ligature BEH WITH KHAH WITH YEH
  {
    matches: ['\u0628\u062E\u064A'],
    forms: { final: '\uFD9E' }
  },
  // Ligature BEH WITH MEEM
  {
    matches: ['\u0628\u0645'],
    forms: { isolated: '\uFC08', initial: '\uFC9F', medial: '\uFCE1', final: '\uFC6C' }
  },
  // Ligature BEH WITH NOON
  {
    matches: ['\u0628\u0646'],
    forms: { final: '\uFC6D' }
  },
  // Ligature BEH WITH REH
  {
    matches: ['\u0628\u0631'],
    forms: { final: '\uFC6A' }
  },
  // Ligature BEH WITH YEH
  {
    matches: ['\u0628\u064A'],
    forms: { isolated: '\uFC0A', final: '\uFC6F' }
  },
  // Ligature BEH WITH ZAIN
  {
    matches: ['\u0628\u0632'],
    forms: { final: '\uFC6B' }
  },
  // Ligature DAD WITH ALEF MAKSURA
  {
    matches: ['\u0636\u0649'],
    forms: { isolated: '\uFD07', final: '\uFD23' }
  },
  // Ligature DAD WITH HAH
  {
    matches: ['\u0636\u062D'],
    forms: { isolated: '\uFC23', initial: '\uFCB5' }
  },
  // Ligature DAD WITH HAH WITH ALEF MAKSURA
  {
    matches: ['\u0636\u062D\u0649'],
    forms: { final: '\uFD6E' }
  },
  // Ligature DAD WITH HAH WITH YEH
  {
    matches: ['\u0636\u062D\u064A'],
    forms: { final: '\uFDAB' }
  },
  // Ligature DAD WITH JEEM
  {
    matches: ['\u0636\u062C'],
    forms: { isolated: '\uFC22', initial: '\uFCB4' }
  },
  // Ligature DAD WITH KHAH
  {
    matches: ['\u0636\u062E'],
    forms: { isolated: '\uFC24', initial: '\uFCB6' }
  },
  // Ligature DAD WITH KHAH WITH MEEM
  {
    matches: ['\u0636\u062E\u0645'],
    forms: { initial: '\uFD70', final: '\uFD6F' }
  },
  // Ligature DAD WITH MEEM
  {
    matches: ['\u0636\u0645'],
    forms: { isolated: '\uFC25', initial: '\uFCB7' }
  },
  // Ligature DAD WITH REH
  {
    matches: ['\u0636\u0631'],
    forms: { isolated: '\uFD10', final: '\uFD2C' }
  },
  // Ligature DAD WITH YEH
  {
    matches: ['\u0636\u064A'],
    forms: { isolated: '\uFD08', final: '\uFD24' }
  },
  // Ligature FEH WITH ALEF MAKSURA
  {
    matches: ['\u0641\u0649'],
    forms: { isolated: '\uFC31', final: '\uFC7C' }
  },
  // Ligature FEH WITH HAH
  {
    matches: ['\u0641\u062D'],
    forms: { isolated: '\uFC2E', initial: '\uFCBF' }
  },
  // Ligature FEH WITH JEEM
  {
    matches: ['\u0641\u062C'],
    forms: { isolated: '\uFC2D', initial: '\uFCBE' }
  },
  // Ligature FEH WITH KHAH
  {
    matches: ['\u0641\u062E'],
    forms: { isolated: '\uFC2F', initial: '\uFCC0' }
  },
  // Ligature FEH WITH KHAH WITH MEEM
  {
    matches: ['\u0641\u062E\u0645'],
    forms: { initial: '\uFD7D', final: '\uFD7C' }
  },
  // Ligature FEH WITH MEEM
  {
    matches: ['\u0641\u0645'],
    forms: { isolated: '\uFC30', initial: '\uFCC1' }
  },
  // Ligature FEH WITH MEEM WITH YEH
  {
    matches: ['\u0641\u0645\u064A'],
    forms: { final: '\uFDC1' }
  },
  // Ligature FEH WITH YEH
  {
    matches: ['\u0641\u064A'],
    forms: { isolated: '\uFC32', final: '\uFC7D' }
  },
  // Ligature GHAIN WITH ALEF MAKSURA
  {
    matches: ['\u063A\u0649'],
    forms: { isolated: '\uFCF9', final: '\uFD15' }
  },
  // Ligature GHAIN WITH JEEM
  {
    matches: ['\u063A\u062C'],
    forms: { isolated: '\uFC2B', initial: '\uFCBC' }
  },
  // Ligature GHAIN WITH MEEM
  {
    matches: ['\u063A\u0645'],
    forms: { isolated: '\uFC2C', initial: '\uFCBD' }
  },
  // Ligature GHAIN WITH MEEM WITH ALEF MAKSURA
  {
    matches: ['\u063A\u0645\u0649'],
    forms: { final: '\uFD7B' }
  },
  // Ligature GHAIN WITH MEEM WITH MEEM
  {
    matches: ['\u063A\u0645\u0645'],
    forms: { final: '\uFD79' }
  },
  // Ligature GHAIN WITH MEEM WITH YEH
  {
    matches: ['\u063A\u0645\u064A'],
    forms: { final: '\uFD7A' }
  },
  // Ligature GHAIN WITH YEH
  {
    matches: ['\u063A\u064A'],
    forms: { isolated: '\uFCFA', final: '\uFD16' }
  },
  // Ligature HAH WITH ALEF MAKSURA
  {
    matches: ['\u062D\u0649'],
    forms: { isolated: '\uFCFF', final: '\uFD1B' }
  },
  // Ligature HAH WITH JEEM
  {
    matches: ['\u062D\u062C'],
    forms: { isolated: '\uFC17', initial: '\uFCA9' }
  },
  // Ligature HAH WITH JEEM WITH YEH
  {
    matches: ['\u062D\u062C\u064A'],
    forms: { final: '\uFDBF' }
  },
  // Ligature HAH WITH MEEM
  {
    matches: ['\u062D\u0645'],
    forms: { isolated: '\uFC18', initial: '\uFCAA' }
  },
  // Ligature HAH WITH MEEM WITH ALEF MAKSURA
  {
    matches: ['\u062D\u0645\u0649'],
    forms: { final: '\uFD5B' }
  },
  // Ligature HAH WITH MEEM WITH YEH
  {
    matches: ['\u062D\u0645\u064A'],
    forms: { final: '\uFD5A' }
  },
  // Ligature HAH WITH YEH
  {
    matches: ['\u062D\u064A'],
    forms: { isolated: '\uFD00', final: '\uFD1C' }
  },
  // Ligature HEH WITH ALEF MAKSURA
  {
    matches: ['\u0647\u0649'],
    forms: { isolated: '\uFC53' }
  },
  // Ligature HEH WITH JEEM
  {
    matches: ['\u0647\u062C'],
    forms: { isolated: '\uFC51', initial: '\uFCD7' }
  },
  // Ligature HEH WITH MEEM
  {
    matches: ['\u0647\u0645'],
    forms: { isolated: '\uFC52', initial: '\uFCD8' }
  },
  // Ligature HEH WITH MEEM WITH JEEM
  {
    matches: ['\u0647\u0645\u062C'],
    forms: { initial: '\uFD93' }
  },
  // Ligature HEH WITH MEEM WITH MEEM
  {
    matches: ['\u0647\u0645\u0645'],
    forms: { initial: '\uFD94' }
  },
  // Ligature HEH WITH SUPERSCRIPT ALEF
  {
    matches: ['\u0647\u0670'],
    forms: { initial: '\uFCD9' }
  },
  // Ligature HEH WITH YEH
  {
    matches: ['\u0647\u064A'],
    forms: { isolated: '\uFC54' }
  },
  // Ligature JEEM WITH ALEF MAKSURA
  {
    matches: ['\u062C\u0649'],
    forms: { isolated: '\uFD01', final: '\uFD1D' }
  },
  // Ligature JEEM WITH HAH
  {
    matches: ['\u062C\u062D'],
    forms: { isolated: '\uFC15', initial: '\uFCA7' }
  },
  // Ligature JEEM WITH HAH WITH ALEF MAKSURA
  {
    matches: ['\u062C\u062D\u0649'],
    forms: { final: '\uFDA6' }
  },
  // Ligature JEEM WITH HAH WITH YEH
  {
    matches: ['\u062C\u062D\u064A'],
    forms: { final: '\uFDBE' }
  },
  // Ligature JEEM WITH MEEM
  {
    matches: ['\u062C\u0645'],
    forms: { isolated: '\uFC16', initial: '\uFCA8' }
  },
  // Ligature JEEM WITH MEEM WITH ALEF MAKSURA
  {
    matches: ['\u062C\u0645\u0649'],
    forms: { final: '\uFDA7' }
  },
  // Ligature JEEM WITH MEEM WITH HAH
  {
    matches: ['\u062C\u0645\u062D'],
    forms: { initial: '\uFD59', final: '\uFD58' }
  },
  // Ligature JEEM WITH MEEM WITH YEH
  {
    matches: ['\u062C\u0645\u064A'],
    forms: { final: '\uFDA5' }
  },
  // Ligature JEEM WITH YEH
  {
    matches: ['\u062C\u064A'],
    forms: { isolated: '\uFD02', final: '\uFD1E' }
  },
  // Ligature KAF WITH ALEF
  {
    matches: ['\u0643\u0627'],
    forms: { isolated: '\uFC37', final: '\uFC80' }
  },
  // Ligature KAF WITH ALEF MAKSURA
  {
    matches: ['\u0643\u0649'],
    forms: { isolated: '\uFC3D', final: '\uFC83' }
  },
  // Ligature KAF WITH HAH
  {
    matches: ['\u0643\u062D'],
    forms: { isolated: '\uFC39', initial: '\uFCC5' }
  },
  // Ligature KAF WITH JEEM
  {
    matches: ['\u0643\u062C'],
    forms: { isolated: '\uFC38', initial: '\uFCC4' }
  },
  // Ligature KAF WITH KHAH
  {
    matches: ['\u0643\u062E'],
    forms: { isolated: '\uFC3A', initial: '\uFCC6' }
  },
  // Ligature KAF WITH LAM
  {
    matches: ['\u0643\u0644'],
    forms: { isolated: '\uFC3B', initial: '\uFCC7', medial: '\uFCEB', final: '\uFC81' }
  },
  // Ligature KAF WITH MEEM
  {
    matches: ['\u0643\u0645'],
    forms: { isolated: '\uFC3C', initial: '\uFCC8', medial: '\uFCEC', final: '\uFC82' }
  },
  // Ligature KAF WITH MEEM WITH MEEM
  {
    matches: ['\u0643\u0645\u0645'],
    forms: { initial: '\uFDC3', final: '\uFDBB' }
  },
  // Ligature KAF WITH MEEM WITH YEH
  {
    matches: ['\u0643\u0645\u064A'],
    forms: { final: '\uFDB7' }
  },
  // Ligature KAF WITH YEH
  {
    matches: ['\u0643\u064A'],
    forms: { isolated: '\uFC3E', final: '\uFC84' }
  },
  // Ligature KHAH WITH ALEF MAKSURA
  {
    matches: ['\u062E\u0649'],
    forms: { isolated: '\uFD03', final: '\uFD1F' }
  },
  // Ligature KHAH WITH HAH
  {
    matches: ['\u062E\u062D'],
    forms: { isolated: '\uFC1A' }
  },
  // Ligature KHAH WITH JEEM
  {
    matches: ['\u062E\u062C'],
    forms: { isolated: '\uFC19', initial: '\uFCAB' }
  },
  // Ligature KHAH WITH MEEM
  {
    matches: ['\u062E\u0645'],
    forms: { isolated: '\uFC1B', initial: '\uFCAC' }
  },
  // Ligature KHAH WITH YEH
  {
    matches: ['\u062E\u064A'],
    forms: { isolated: '\uFD04', final: '\uFD20' }
  },
  // Ligature LAM WITH ALEF
  {
    matches: ['\u0644\u0627'],
    forms: { isolated: '\uFEFB', final: '\uFEFC' }
  },
  // Ligature LAM WITH ALEF MAKSURA
  {
    matches: ['\u0644\u0649'],
    forms: { isolated: '\uFC43', final: '\uFC86' }
  },
  // Ligature LAM WITH ALEF WITH HAMZA ABOVE
  {
    matches: ['\u0644\u0623'],
    forms: { isolated: '\uFEF7', final: '\uFEF8' }
  },
  // Ligature LAM WITH ALEF WITH HAMZA BELOW
  {
    matches: ['\u0644\u0625'],
    forms: { isolated: '\uFEF9', final: '\uFEFA' }
  },
  // Ligature LAM WITH ALEF WITH MADDA ABOVE
  {
    matches: ['\u0644\u0622'],
    forms: { isolated: '\uFEF5', final: '\uFEF6' }
  },
  // Ligature LAM WITH HAH
  {
    matches: ['\u0644\u062D'],
    forms: { isolated: '\uFC40', initial: '\uFCCA' }
  },
  // Ligature LAM WITH HAH WITH ALEF MAKSURA
  {
    matches: ['\u0644\u062D\u0649'],
    forms: { final: '\uFD82' }
  },
  // Ligature LAM WITH HAH WITH MEEM
  {
    matches: ['\u0644\u062D\u0645'],
    forms: { initial: '\uFDB5', final: '\uFD80' }
  },
  // Ligature LAM WITH HAH WITH YEH
  {
    matches: ['\u0644\u062D\u064A'],
    forms: { final: '\uFD81' }
  },
  // Ligature LAM WITH HEH
  {
    matches: ['\u0644\u0647'],
    forms: { initial: '\uFCCD' }
  },
  // Ligature LAM WITH JEEM
  {
    matches: ['\u0644\u062C'],
    forms: { isolated: '\uFC3F', initial: '\uFCC9' }
  },
  // Ligature LAM WITH JEEM WITH JEEM
  {
    matches: ['\u0644\u062C\u062C'],
    forms: { initial: '\uFD83', final: '\uFD84' }
  },
  // Ligature LAM WITH JEEM WITH MEEM
  {
    matches: ['\u0644\u062C\u0645'],
    forms: { initial: '\uFDBA', final: '\uFDBC' }
  },
  // Ligature LAM WITH JEEM WITH YEH
  {
    matches: ['\u0644\u062C\u064A'],
    forms: { final: '\uFDAC' }
  },
  // Ligature LAM WITH KHAH
  {
    matches: ['\u0644\u062E'],
    forms: { isolated: '\uFC41', initial: '\uFCCB' }
  },
  // Ligature LAM WITH KHAH WITH MEEM
  {
    matches: ['\u0644\u062E\u0645'],
    forms: { initial: '\uFD86', final: '\uFD85' }
  },
  // Ligature LAM WITH MEEM
  {
    matches: ['\u0644\u0645'],
    forms: { isolated: '\uFC42', initial: '\uFCCC', medial: '\uFCED', final: '\uFC85' }
  },
  // Ligature LAM WITH MEEM WITH HAH
  {
    matches: ['\u0644\u0645\u062D'],
    forms: { initial: '\uFD88', final: '\uFD87' }
  },
  // Ligature LAM WITH MEEM WITH YEH
  {
    matches: ['\u0644\u0645\u064A'],
    forms: { final: '\uFDAD' }
  },
  // Ligature LAM WITH YEH
  {
    matches: ['\u0644\u064A'],
    forms: { isolated: '\uFC44', final: '\uFC87' }
  },
  // Ligature MEEM WITH ALEF
  {
    matches: ['\u0645\u0627'],
    forms: { final: '\uFC88' }
  },
  // Ligature MEEM WITH ALEF MAKSURA
  {
    matches: ['\u0645\u0649'],
    forms: { isolated: '\uFC49' }
  },
  // Ligature MEEM WITH HAH
  {
    matches: ['\u0645\u062D'],
    forms: { isolated: '\uFC46', initial: '\uFCCF' }
  },
  // Ligature MEEM WITH HAH WITH JEEM
  {
    matches: ['\u0645\u062D\u062C'],
    forms: { initial: '\uFD89' }
  },
  // Ligature MEEM WITH HAH WITH MEEM
  {
    matches: ['\u0645\u062D\u0645'],
    forms: { initial: '\uFD8A' }
  },
  // Ligature MEEM WITH HAH WITH YEH
  {
    matches: ['\u0645\u062D\u064A'],
    forms: { final: '\uFD8B' }
  },
  // Ligature MEEM WITH JEEM
  {
    matches: ['\u0645\u062C'],
    forms: { isolated: '\uFC45', initial: '\uFCCE' }
  },
  // Ligature MEEM WITH JEEM WITH HAH
  {
    matches: ['\u0645\u062C\u062D'],
    forms: { initial: '\uFD8C' }
  },
  // Ligature MEEM WITH JEEM WITH KHAH
  {
    matches: ['\u0645\u062C\u062E'],
    forms: { initial: '\uFD92' }
  },
  // Ligature MEEM WITH JEEM WITH MEEM
  {
    matches: ['\u0645\u062C\u0645'],
    forms: { initial: '\uFD8D' }
  },
  // Ligature MEEM WITH JEEM WITH YEH
  {
    matches: ['\u0645\u062C\u064A'],
    forms: { final: '\uFDC0' }
  },
  // Ligature MEEM WITH KHAH
  {
    matches: ['\u0645\u062E'],
    forms: { isolated: '\uFC47', initial: '\uFCD0' }
  },
  // Ligature MEEM WITH KHAH WITH JEEM
  {
    matches: ['\u0645\u062E\u062C'],
    forms: { initial: '\uFD8E' }
  },
  // Ligature MEEM WITH KHAH WITH MEEM
  {
    matches: ['\u0645\u062E\u0645'],
    forms: { initial: '\uFD8F' }
  },
  // Ligature MEEM WITH KHAH WITH YEH
  {
    matches: ['\u0645\u062E\u064A'],
    forms: { final: '\uFDB9' }
  },
  // Ligature MEEM WITH MEEM
  {
    matches: ['\u0645\u0645'],
    forms: { isolated: '\uFC48', initial: '\uFCD1', final: '\uFC89' }
  },
  // Ligature MEEM WITH MEEM WITH YEH
  {
    matches: ['\u0645\u0645\u064A'],
    forms: { final: '\uFDB1' }
  },
  // Ligature MEEM WITH YEH
  {
    matches: ['\u0645\u064A'],
    forms: { isolated: '\uFC4A' }
  },
  // Ligature NOON WITH ALEF MAKSURA
  {
    matches: ['\u0646\u0649'],
    forms: { isolated: '\uFC4F', final: '\uFC8E' }
  },
  // Ligature NOON WITH HAH
  {
    matches: ['\u0646\u062D'],
    forms: { isolated: '\uFC4C', initial: '\uFCD3' }
  },
  // Ligature NOON WITH HAH WITH ALEF MAKSURA
  {
    matches: ['\u0646\u062D\u0649'],
    forms: { final: '\uFD96' }
  },
  // Ligature NOON WITH HAH WITH MEEM
  {
    matches: ['\u0646\u062D\u0645'],
    forms: { initial: '\uFD95' }
  },
  // Ligature NOON WITH HAH WITH YEH
  {
    matches: ['\u0646\u062D\u064A'],
    forms: { final: '\uFDB3' }
  },
  // Ligature NOON WITH HEH
  {
    matches: ['\u0646\u0647'],
    forms: { initial: '\uFCD6', medial: '\uFCEF' }
  },
  // Ligature NOON WITH JEEM
  {
    matches: ['\u0646\u062C'],
    forms: { isolated: '\uFC4B', initial: '\uFCD2' }
  },
  // Ligature NOON WITH JEEM WITH ALEF MAKSURA
  {
    matches: ['\u0646\u062C\u0649'],
    forms: { final: '\uFD99' }
  },
  // Ligature NOON WITH JEEM WITH HAH
  {
    matches: ['\u0646\u062C\u062D'],
    forms: { initial: '\uFDB8', final: '\uFDBD' }
  },
  // Ligature NOON WITH JEEM WITH MEEM
  {
    matches: ['\u0646\u062C\u0645'],
    forms: { initial: '\uFD98', final: '\uFD97' }
  },
  // Ligature NOON WITH JEEM WITH YEH
  {
    matches: ['\u0646\u062C\u064A'],
    forms: { final: '\uFDC7' }
  },
  // Ligature NOON WITH KHAH
  {
    matches: ['\u0646\u062E'],
    forms: { isolated: '\uFC4D', initial: '\uFCD4' }
  },
  // Ligature NOON WITH MEEM
  {
    matches: ['\u0646\u0645'],
    forms: { isolated: '\uFC4E', initial: '\uFCD5', medial: '\uFCEE', final: '\uFC8C' }
  },
  // Ligature NOON WITH MEEM WITH ALEF MAKSURA
  {
    matches: ['\u0646\u0645\u0649'],
    forms: { final: '\uFD9B' }
  },
  // Ligature NOON WITH MEEM WITH YEH
  {
    matches: ['\u0646\u0645\u064A'],
    forms: { final: '\uFD9A' }
  },
  // Ligature NOON WITH NOON
  {
    matches: ['\u0646\u0646'],
    forms: { final: '\uFC8D' }
  },
  // Ligature NOON WITH REH
  {
    matches: ['\u0646\u0631'],
    forms: { final: '\uFC8A' }
  },
  // Ligature NOON WITH YEH
  {
    matches: ['\u0646\u064A'],
    forms: { isolated: '\uFC50', final: '\uFC8F' }
  },
  // Ligature NOON WITH ZAIN
  {
    matches: ['\u0646\u0632'],
    forms: { final: '\uFC8B' }
  },
  // Ligature QAF WITH ALEF MAKSURA
  {
    matches: ['\u0642\u0649'],
    forms: { isolated: '\uFC35', final: '\uFC7E' }
  },
  // Ligature QAF WITH HAH
  {
    matches: ['\u0642\u062D'],
    forms: { isolated: '\uFC33', initial: '\uFCC2' }
  },
  // Ligature QAF WITH MEEM
  {
    matches: ['\u0642\u0645'],
    forms: { isolated: '\uFC34', initial: '\uFCC3' }
  },
  // Ligature QAF WITH MEEM WITH HAH
  {
    matches: ['\u0642\u0645\u062D'],
    forms: { initial: '\uFDB4', final: '\uFD7E' }
  },
  // Ligature QAF WITH MEEM WITH MEEM
  {
    matches: ['\u0642\u0645\u0645'],
    forms: { final: '\uFD7F' }
  },
  // Ligature QAF WITH MEEM WITH YEH
  {
    matches: ['\u0642\u0645\u064A'],
    forms: { final: '\uFDB2' }
  },
  // Ligature QAF WITH YEH
  {
    matches: ['\u0642\u064A'],
    forms: { isolated: '\uFC36', final: '\uFC7F' }
  },
  // Ligature REH WITH SUPERSCRIPT ALEF
  {
    matches: ['\u0631\u0670'],
    forms: { isolated: '\uFC5C' }
  },
  // Ligature SAD WITH ALEF MAKSURA
  {
    matches: ['\u0635\u0649'],
    forms: { isolated: '\uFD05', final: '\uFD21' }
  },
  // Ligature SAD WITH HAH
  {
    matches: ['\u0635\u062D'],
    forms: { isolated: '\uFC20', initial: '\uFCB1' }
  },
  // Ligature SAD WITH HAH WITH HAH
  {
    matches: ['\u0635\u062D\u062D'],
    forms: { initial: '\uFD65', final: '\uFD64' }
  },
  // Ligature SAD WITH HAH WITH YEH
  {
    matches: ['\u0635\u062D\u064A'],
    forms: { final: '\uFDA9' }
  },
  // Ligature SAD WITH KHAH
  {
    matches: ['\u0635\u062E'],
    forms: { initial: '\uFCB2' }
  },
  // Ligature SAD WITH MEEM
  {
    matches: ['\u0635\u0645'],
    forms: { isolated: '\uFC21', initial: '\uFCB3' }
  },
  // Ligature SAD WITH MEEM WITH MEEM
  {
    matches: ['\u0635\u0645\u0645'],
    forms: { initial: '\uFDC5', final: '\uFD66' }
  },
  // Ligature SAD WITH REH
  {
    matches: ['\u0635\u0631'],
    forms: { isolated: '\uFD0F', final: '\uFD2B' }
  },
  // Ligature SAD WITH YEH
  {
    matches: ['\u0635\u064A'],
    forms: { isolated: '\uFD06', final: '\uFD22' }
  },
  // Ligature SEEN WITH ALEF MAKSURA
  {
    matches: ['\u0633\u0649'],
    forms: { isolated: '\uFCFB', final: '\uFD17' }
  },
  // Ligature SEEN WITH HAH
  {
    matches: ['\u0633\u062D'],
    forms: { isolated: '\uFC1D', initial: '\uFCAE', medial: '\uFD35' }
  },
  // Ligature SEEN WITH HAH WITH JEEM
  {
    matches: ['\u0633\u062D\u062C'],
    forms: { initial: '\uFD5C' }
  },
  // Ligature SEEN WITH HEH
  {
    matches: ['\u0633\u0647'],
    forms: { initial: '\uFD31', medial: '\uFCE8' }
  },
  // Ligature SEEN WITH JEEM
  {
    matches: ['\u0633\u062C'],
    forms: { isolated: '\uFC1C', initial: '\uFCAD', medial: '\uFD34' }
  },
  // Ligature SEEN WITH JEEM WITH ALEF MAKSURA
  {
    matches: ['\u0633\u062C\u0649'],
    forms: { final: '\uFD5E' }
  },
  // Ligature SEEN WITH JEEM WITH HAH
  {
    matches: ['\u0633\u062C\u062D'],
    forms: { initial: '\uFD5D' }
  },
  // Ligature SEEN WITH KHAH
  {
    matches: ['\u0633\u062E'],
    forms: { isolated: '\uFC1E', initial: '\uFCAF', medial: '\uFD36' }
  },
  // Ligature SEEN WITH KHAH WITH ALEF MAKSURA
  {
    matches: ['\u0633\u062E\u0649'],
    forms: { final: '\uFDA8' }
  },
  // Ligature SEEN WITH KHAH WITH YEH
  {
    matches: ['\u0633\u062E\u064A'],
    forms: { final: '\uFDC6' }
  },
  // Ligature SEEN WITH MEEM
  {
    matches: ['\u0633\u0645'],
    forms: { isolated: '\uFC1F', initial: '\uFCB0', medial: '\uFCE7' }
  },
  // Ligature SEEN WITH MEEM WITH HAH
  {
    matches: ['\u0633\u0645\u062D'],
    forms: { initial: '\uFD60', final: '\uFD5F' }
  },
  // Ligature SEEN WITH MEEM WITH JEEM
  {
    matches: ['\u0633\u0645\u062C'],
    forms: { initial: '\uFD61' }
  },
  // Ligature SEEN WITH MEEM WITH MEEM
  {
    matches: ['\u0633\u0645\u0645'],
    forms: { initial: '\uFD63', final: '\uFD62' }
  },
  // Ligature SEEN WITH REH
  {
    matches: ['\u0633\u0631'],
    forms: { isolated: '\uFD0E', final: '\uFD2A' }
  },
  // Ligature SEEN WITH YEH
  {
    matches: ['\u0633\u064A'],
    forms: { isolated: '\uFCFC', final: '\uFD18' }
  },
  // Ligature SHADDA WITH DAMMA
  {
    matches: ['\u0640\u064F\u0651'],
    forms: { medial: '\uFCF3' }
  },
  // Ligature SHADDA WITH FATHA
  {
    matches: ['\u0640\u064E\u0651'],
    forms: { medial: '\uFCF2' }
  },
  // Ligature SHADDA WITH KASRA
  {
    matches: ['\u0640\u0650\u0651'],
    forms: { medial: '\uFCF4' }
  },
  // Ligature SHEEN WITH ALEF MAKSURA
  {
    matches: ['\u0634\u0649'],
    forms: { isolated: '\uFCFD', final: '\uFD19' }
  },
  // Ligature SHEEN WITH HAH
  {
    matches: ['\u0634\u062D'],
    forms: { isolated: '\uFD0A', initial: '\uFD2E', medial: '\uFD38', final: '\uFD26' }
  },
  // Ligature SHEEN WITH HAH WITH MEEM
  {
    matches: ['\u0634\u062D\u0645'],
    forms: { initial: '\uFD68', final: '\uFD67' }
  },
  // Ligature SHEEN WITH HAH WITH YEH
  {
    matches: ['\u0634\u062D\u064A'],
    forms: { final: '\uFDAA' }
  },
  // Ligature SHEEN WITH HEH
  {
    matches: ['\u0634\u0647'],
    forms: { initial: '\uFD32', medial: '\uFCEA' }
  },
  // Ligature SHEEN WITH JEEM
  {
    matches: ['\u0634\u062C'],
    forms: { isolated: '\uFD09', initial: '\uFD2D', medial: '\uFD37', final: '\uFD25' }
  },
  // Ligature SHEEN WITH JEEM WITH YEH
  {
    matches: ['\u0634\u062C\u064A'],
    forms: { final: '\uFD69' }
  },
  // Ligature SHEEN WITH KHAH
  {
    matches: ['\u0634\u062E'],
    forms: { isolated: '\uFD0B', initial: '\uFD2F', medial: '\uFD39', final: '\uFD27' }
  },
  // Ligature SHEEN WITH MEEM
  {
    matches: ['\u0634\u0645'],
    forms: { isolated: '\uFD0C', initial: '\uFD30', medial: '\uFCE9', final: '\uFD28' }
  },
  // Ligature SHEEN WITH MEEM WITH KHAH
  {
    matches: ['\u0634\u0645\u062E'],
    forms: { initial: '\uFD6B', final: '\uFD6A' }
  },
  // Ligature SHEEN WITH MEEM WITH MEEM
  {
    matches: ['\u0634\u0645\u0645'],
    forms: { initial: '\uFD6D', final: '\uFD6C' }
  },
  // Ligature SHEEN WITH REH
  {
    matches: ['\u0634\u0631'],
    forms: { isolated: '\uFD0D', final: '\uFD29' }
  },
  // Ligature SHEEN WITH YEH
  {
    matches: ['\u0634\u064A'],
    forms: { isolated: '\uFCFE', final: '\uFD1A' }
  },
  // Ligature TAH WITH ALEF MAKSURA
  {
    matches: ['\u0637\u0649'],
    forms: { isolated: '\uFCF5', final: '\uFD11' }
  },
  // Ligature TAH WITH HAH
  {
    matches: ['\u0637\u062D'],
    forms: { isolated: '\uFC26', initial: '\uFCB8' }
  },
  // Ligature TAH WITH MEEM
  {
    matches: ['\u0637\u0645'],
    forms: { isolated: '\uFC27', initial: '\uFD33', medial: '\uFD3A' }
  },
  // Ligature TAH WITH MEEM WITH HAH
  {
    matches: ['\u0637\u0645\u062D'],
    forms: { initial: '\uFD72', final: '\uFD71' }
  },
  // Ligature TAH WITH MEEM WITH MEEM
  {
    matches: ['\u0637\u0645\u0645'],
    forms: { initial: '\uFD73' }
  },
  // Ligature TAH WITH MEEM WITH YEH
  {
    matches: ['\u0637\u0645\u064A'],
    forms: { final: '\uFD74' }
  },
  // Ligature TAH WITH YEH
  {
    matches: ['\u0637\u064A'],
    forms: { isolated: '\uFCF6', final: '\uFD12' }
  },
  // Ligature TEH WITH ALEF MAKSURA
  {
    matches: ['\u062A\u0649'],
    forms: { isolated: '\uFC0F', final: '\uFC74' }
  },
  // Ligature TEH WITH HAH
  {
    matches: ['\u062A\u062D'],
    forms: { isolated: '\uFC0C', initial: '\uFCA2' }
  },
  // Ligature TEH WITH HAH WITH JEEM
  {
    matches: ['\u062A\u062D\u062C'],
    forms: { initial: '\uFD52', final: '\uFD51' }
  },
  // Ligature TEH WITH HAH WITH MEEM
  {
    matches: ['\u062A\u062D\u0645'],
    forms: { initial: '\uFD53' }
  },
  // Ligature TEH WITH HEH
  {
    matches: ['\u062A\u0647'],
    forms: { initial: '\uFCA5', medial: '\uFCE4' }
  },
  // Ligature TEH WITH JEEM
  {
    matches: ['\u062A\u062C'],
    forms: { isolated: '\uFC0B', initial: '\uFCA1' }
  },
  // Ligature TEH WITH JEEM WITH ALEF MAKSURA
  {
    matches: ['\u062A\u062C\u0649'],
    forms: { final: '\uFDA0' }
  },
  // Ligature TEH WITH JEEM WITH MEEM
  {
    matches: ['\u062A\u062C\u0645'],
    forms: { initial: '\uFD50' }
  },
  // Ligature TEH WITH JEEM WITH YEH
  {
    matches: ['\u062A\u062C\u064A'],
    forms: { final: '\uFD9F' }
  },
  // Ligature TEH WITH KHAH
  {
    matches: ['\u062A\u062E'],
    forms: { isolated: '\uFC0D', initial: '\uFCA3' }
  },
  // Ligature TEH WITH KHAH WITH ALEF MAKSURA
  {
    matches: ['\u062A\u062E\u0649'],
    forms: { final: '\uFDA2' }
  },
  // Ligature TEH WITH KHAH WITH MEEM
  {
    matches: ['\u062A\u062E\u0645'],
    forms: { initial: '\uFD54' }
  },
  // Ligature TEH WITH KHAH WITH YEH
  {
    matches: ['\u062A\u062E\u064A'],
    forms: { final: '\uFDA1' }
  },
  // Ligature TEH WITH MEEM
  {
    matches: ['\u062A\u0645'],
    forms: { isolated: '\uFC0E', initial: '\uFCA4', medial: '\uFCE3', final: '\uFC72' }
  },
  // Ligature TEH WITH MEEM WITH ALEF MAKSURA
  {
    matches: ['\u062A\u0645\u0649'],
    forms: { final: '\uFDA4' }
  },
  // Ligature TEH WITH MEEM WITH HAH
  {
    matches: ['\u062A\u0645\u062D'],
    forms: { initial: '\uFD56' }
  },
  // Ligature TEH WITH MEEM WITH JEEM
  {
    matches: ['\u062A\u0645\u062C'],
    forms: { initial: '\uFD55' }
  },
  // Ligature TEH WITH MEEM WITH KHAH
  {
    matches: ['\u062A\u0645\u062E'],
    forms: { initial: '\uFD57' }
  },
  // Ligature TEH WITH MEEM WITH YEH
  {
    matches: ['\u062A\u0645\u064A'],
    forms: { final: '\uFDA3' }
  },
  // Ligature TEH WITH NOON
  {
    matches: ['\u062A\u0646'],
    forms: { final: '\uFC73' }
  },
  // Ligature TEH WITH REH
  {
    matches: ['\u062A\u0631'],
    forms: { final: '\uFC70' }
  },
  // Ligature TEH WITH YEH
  {
    matches: ['\u062A\u064A'],
    forms: { isolated: '\uFC10', final: '\uFC75' }
  },
  // Ligature TEH WITH ZAIN
  {
    matches: ['\u062A\u0632'],
    forms: { final: '\uFC71' }
  },
  // Ligature THAL WITH SUPERSCRIPT ALEF
  {
    matches: ['\u0630\u0670'],
    forms: { isolated: '\uFC5B' }
  },
  // Ligature THEH WITH ALEF MAKSURA
  {
    matches: ['\u062B\u0649'],
    forms: { isolated: '\uFC13', final: '\uFC7A' }
  },
  // Ligature THEH WITH HEH
  {
    matches: ['\u062B\u0647'],
    forms: { medial: '\uFCE6' }
  },
  // Ligature THEH WITH JEEM
  {
    matches: ['\u062B\u062C'],
    forms: { isolated: '\uFC11' }
  },
  // Ligature THEH WITH MEEM
  {
    matches: ['\u062B\u0645'],
    forms: { isolated: '\uFC12', initial: '\uFCA6', medial: '\uFCE5', final: '\uFC78' }
  },
  // Ligature THEH WITH NOON
  {
    matches: ['\u062B\u0646'],
    forms: { final: '\uFC79' }
  },
  // Ligature THEH WITH REH
  {
    matches: ['\u062B\u0631'],
    forms: { final: '\uFC76' }
  },
  // Ligature THEH WITH YEH
  {
    matches: ['\u062B\u064A'],
    forms: { isolated: '\uFC14', final: '\uFC7B' }
  },
  // Ligature THEH WITH ZAIN
  {
    matches: ['\u062B\u0632'],
    forms: { final: '\uFC77' }
  },
  // Ligature UIGHUR KIRGHIZ YEH WITH HAMZA ABOVE WITH ALEF MAKSURA
  {
    matches: ['\u0626\u0649'],
    forms: { isolated: '\uFBF9', initial: '\uFBFB', final: '\uFBFA' }
  },
  // Ligature YEH WITH ALEF MAKSURA
  {
    matches: ['\u064A\u0649'],
    forms: { isolated: '\uFC59', final: '\uFC95' }
  },
  // Ligature YEH WITH HAH
  {
    matches: ['\u064A\u062D'],
    forms: { isolated: '\uFC56', initial: '\uFCDB' }
  },
  // Ligature YEH WITH HAH WITH YEH
  {
    matches: ['\u064A\u062D\u064A'],
    forms: { final: '\uFDAE' }
  },
  // Ligature YEH WITH HAMZA ABOVE WITH AE
  {
    matches: ['\u0626\u06D5'],
    forms: { isolated: '\uFBEC', final: '\uFBED' }
  },
  // Ligature YEH WITH HAMZA ABOVE WITH ALEF
  {
    matches: ['\u0626\u0627'],
    forms: { isolated: '\uFBEA', final: '\uFBEB' }
  },
  // Ligature YEH WITH HAMZA ABOVE WITH ALEF MAKSURA
  {
    matches: ['\u0626\u0649'],
    forms: { isolated: '\uFC03', final: '\uFC68' }
  },
  // Ligature YEH WITH HAMZA ABOVE WITH E
  {
    matches: ['\u0626\u06D0'],
    forms: { isolated: '\uFBF6', initial: '\uFBF8', final: '\uFBF7' }
  },
  // Ligature YEH WITH HAMZA ABOVE WITH HAH
  {
    matches: ['\u0626\u062D'],
    forms: { isolated: '\uFC01', initial: '\uFC98' }
  },
  // Ligature YEH WITH HAMZA ABOVE WITH HEH
  {
    matches: ['\u0626\u0647'],
    forms: { initial: '\uFC9B', medial: '\uFCE0' }
  },
  // Ligature YEH WITH HAMZA ABOVE WITH JEEM
  {
    matches: ['\u0626\u062C'],
    forms: { isolated: '\uFC00', initial: '\uFC97' }
  },
  // Ligature YEH WITH HAMZA ABOVE WITH KHAH
  {
    matches: ['\u0626\u062E'],
    forms: { initial: '\uFC99' }
  },
  // Ligature YEH WITH HAMZA ABOVE WITH MEEM
  {
    matches: ['\u0626\u0645'],
    forms: { isolated: '\uFC02', initial: '\uFC9A', medial: '\uFCDF', final: '\uFC66' }
  },
  // Ligature YEH WITH HAMZA ABOVE WITH NOON
  {
    matches: ['\u0626\u0646'],
    forms: { final: '\uFC67' }
  },
  // Ligature YEH WITH HAMZA ABOVE WITH OE
  {
    matches: ['\u0626\u06C6'],
    forms: { isolated: '\uFBF2', final: '\uFBF3' }
  },
  // Ligature YEH WITH HAMZA ABOVE WITH REH
  {
    matches: ['\u0626\u0631'],
    forms: { final: '\uFC64' }
  },
  // Ligature YEH WITH HAMZA ABOVE WITH U
  {
    matches: ['\u0626\u06C7'],
    forms: { isolated: '\uFBF0', final: '\uFBF1' }
  },
  // Ligature YEH WITH HAMZA ABOVE WITH WAW
  {
    matches: ['\u0626\u0648'],
    forms: { isolated: '\uFBEE', final: '\uFBEF' }
  },
  // Ligature YEH WITH HAMZA ABOVE WITH YEH
  {
    matches: ['\u0626\u064A'],
    forms: { isolated: '\uFC04', final: '\uFC69' }
  },
  // Ligature YEH WITH HAMZA ABOVE WITH YU
  {
    matches: ['\u0626\u06C8'],
    forms: { isolated: '\uFBF4', final: '\uFBF5' }
  },
  // Ligature YEH WITH HAMZA ABOVE WITH ZAIN
  {
    matches: ['\u0626\u0632'],
    forms: { final: '\uFC65' }
  },
  // Ligature YEH WITH HEH
  {
    matches: ['\u064A\u0647'],
    forms: { initial: '\uFCDE', medial: '\uFCF1' }
  },
  // Ligature YEH WITH JEEM
  {
    matches: ['\u064A\u062C'],
    forms: { isolated: '\uFC55', initial: '\uFCDA' }
  },
  // Ligature YEH WITH JEEM WITH YEH
  {
    matches: ['\u064A\u062C\u064A'],
    forms: { final: '\uFDAF' }
  },
  // Ligature YEH WITH KHAH
  {
    matches: ['\u064A\u062E'],
    forms: { isolated: '\uFC57', initial: '\uFCDC' }
  },
  // Ligature YEH WITH MEEM
  {
    matches: ['\u064A\u0645'],
    forms: { isolated: '\uFC58', initial: '\uFCDD', medial: '\uFCF0', final: '\uFC93' }
  },
  // Ligature YEH WITH MEEM WITH MEEM
  {
    matches: ['\u064A\u0645\u0645'],
    forms: { initial: '\uFD9D', final: '\uFD9C' }
  },
  // Ligature YEH WITH MEEM WITH YEH
  {
    matches: ['\u064A\u0645\u064A'],
    forms: { final: '\uFDB0' }
  },
  // Ligature YEH WITH NOON
  {
    matches: ['\u064A\u0646'],
    forms: { final: '\uFC94' }
  },
  // Ligature YEH WITH REH
  {
    matches: ['\u064A\u0631'],
    forms: { final: '\uFC91' },
  },
  // Ligature YEH WITH YEH
  {
    matches: ['\u064A\u064A'],
    forms: { isolated: '\uFC5A', final: '\uFC96' },
  },
  // Ligature YEH WITH ZAIN
  {
    matches: ['\u064A\u0632'],
    forms: { final: '\uFC92' }
  },
  // Ligature ZAH WITH MEEM
  {
    matches: ['\u0638\u0645'],
    forms: { isolated: '\uFC28', initial: '\uFCB9', medial: '\uFD3B' }
  }
];

export const LETTERS: { [key: string]: { isolated: string, final?: string, initial?: string, medial?: string } } = {
  // Letter HAMZA
  '\u0621': { isolated: '\uFE80' },
  // Letter ALEF WITH MADDA ABOVE
  '\u0622': { isolated: '\uFE81', final: '\uFE82' },
  // Letter ALEF WITH HAMZA ABOVE
  '\u0623': { isolated: '\uFE83', final: '\uFE84' },
  // Letter WAW WITH HAMZA ABOVE
  '\u0624': { isolated: '\uFE85', final: '\uFE86' },
  // Letter ALEF WITH HAMZA BELOW
  '\u0625': { isolated: '\uFE87', final: '\uFE88' },
  // Letter YEH WITH HAMZA ABOVE
  '\u0626': { isolated: '\uFE89', initial: '\uFE8B', medial: '\uFE8C', final: '\uFE8A' },
  // Letter ALEF
  '\u0627': { isolated: '\uFE8D', final: '\uFE8E' },
  // Letter BEH
  '\u0628': { isolated: '\uFE8F', initial: '\uFE91', medial: '\uFE92', final: '\uFE90' },
  // Letter TEH MARBUTA
  '\u0629': { isolated: '\uFE93', final: '\uFE94' },
  // Letter TEH
  '\u062A': { isolated: '\uFE95', initial: '\uFE97', medial: '\uFE98', final: '\uFE96' },
  // Letter THEH
  '\u062B': { isolated: '\uFE99', initial: '\uFE9B', medial: '\uFE9C', final: '\uFE9A' },
  // Letter JEEM
  '\u062C': { isolated: '\uFE9D', initial: '\uFE9F', medial: '\uFEA0', final: '\uFE9E' },
  // Letter HAH
  '\u062D': { isolated: '\uFEA1', initial: '\uFEA3', medial: '\uFEA4', final: '\uFEA2' },
  // Letter KHAH
  '\u062E': { isolated: '\uFEA5', initial: '\uFEA7', medial: '\uFEA8', final: '\uFEA6' },
  // Letter DAL
  '\u062F': { isolated: '\uFEA9', final: '\uFEAA' },
  // Letter THAL
  '\u0630': { isolated: '\uFEAB', final: '\uFEAC' },
  // Letter REH
  '\u0631': { isolated: '\uFEAD', final: '\uFEAE' },
  // Letter ZAIN
  '\u0632': { isolated: '\uFEAF', final: '\uFEB0' },
  // Letter SEEN
  '\u0633': { isolated: '\uFEB1', initial: '\uFEB3', medial: '\uFEB4', final: '\uFEB2' },
  // Letter SHEEN
  '\u0634': { isolated: '\uFEB5', initial: '\uFEB7', medial: '\uFEB8', final: '\uFEB6' },
  // Letter SAD
  '\u0635': { isolated: '\uFEB9', initial: '\uFEBB', medial: '\uFEBC', final: '\uFEBA' },
  // Letter DAD
  '\u0636': { isolated: '\uFEBD', initial: '\uFEBF', medial: '\uFEC0', final: '\uFEBE' },
  // Letter TAH
  '\u0637': { isolated: '\uFEC1', initial: '\uFEC3', medial: '\uFEC4', final: '\uFEC2' },
  // Letter ZAH
  '\u0638': { isolated: '\uFEC5', initial: '\uFEC7', medial: '\uFEC8', final: '\uFEC6' },
  // Letter AIN
  '\u0639': { isolated: '\uFEC9', initial: '\uFECB', medial: '\uFECC', final: '\uFECA' },
  // Letter GHAIN
  '\u063A': { isolated: '\uFECD', initial: '\uFECF', medial: '\uFED0', final: '\uFECE' },
  // TATWEEL
  '\u0640': { isolated: '\u0640', initial: '\u0640', medial: '\u0640', final: '\u0640' },
  // Letter FEH
  '\u0641': { isolated: '\uFED1', initial: '\uFED3', medial: '\uFED4', final: '\uFED2' },
  // Letter QAF
  '\u0642': { isolated: '\uFED5', initial: '\uFED7', medial: '\uFED8', final: '\uFED6' },
  // Letter KAF
  '\u0643': { isolated: '\uFED9', initial: '\uFEDB', medial: '\uFEDC', final: '\uFEDA' },
  // Letter LAM
  '\u0644': { isolated: '\uFEDD', initial: '\uFEDF', medial: '\uFEE0', final: '\uFEDE' },
  // Letter MEEM
  '\u0645': { isolated: '\uFEE1', initial: '\uFEE3', medial: '\uFEE4', final: '\uFEE2' },
  // Letter NOON
  '\u0646': { isolated: '\uFEE5', initial: '\uFEE7', medial: '\uFEE8', final: '\uFEE6' },
  // Letter HEH
  '\u0647': { isolated: '\uFEE9', initial: '\uFEEB', medial: '\uFEEC', final: '\uFEEA' },
  // Letter WAW
  '\u0648': { isolated: '\uFEED', final: '\uFEEE' },
  // Letter ALEF MAKSURA
  '\u0649': { isolated: '\uFEEF', final: '\uFEF0' },
  // Letter YEH
  '\u064A': { isolated: '\uFEF1', initial: '\uFEF3', medial: '\uFEF4', final: '\uFEF2' },
  // Letter ALEF WASLA
  '\u0671': { isolated: '\uFB50', final: '\uFB51' },
  // Letter U WITH HAMZA ABOVE
  '\u0677': { isolated: '\uFBDD' },
  // Letter TTEH
  '\u0679': { isolated: '\uFB66', initial: '\uFB68', medial: '\uFB69', final: '\uFB67' },
  // Letter TTEHEH
  '\u067A': { isolated: '\uFB5E', initial: '\uFB60', medial: '\uFB61', final: '\uFB5F' },
  // Letter BEEH
  '\u067B': { isolated: '\uFB52', initial: '\uFB54', medial: '\uFB55', final: '\uFB53' },
  // Letter PEH
  '\u067E': { isolated: '\uFB56', initial: '\uFB58', medial: '\uFB59', final: '\uFB57' },
  // Letter TEHEH
  '\u067F': { isolated: '\uFB62', initial: '\uFB64', medial: '\uFB65', final: '\uFB63' },
  // Letter BEHEH
  '\u0680': { isolated: '\uFB5A', initial: '\uFB5C', medial: '\uFB5D', final: '\uFB5B' },
  // Letter NYEH
  '\u0683': { isolated: '\uFB76', initial: '\uFB78', medial: '\uFB79', final: '\uFB77' },
  // Letter DYEH
  '\u0684': { isolated: '\uFB72', initial: '\uFB74', medial: '\uFB75', final: '\uFB73' },
  // Letter TCHEH
  '\u0686': { isolated: '\uFB7A', initial: '\uFB7C', medial: '\uFB7D', final: '\uFB7B' },
  // Letter TCHEHEH
  '\u0687': { isolated: '\uFB7E', initial: '\uFB80', medial: '\uFB81', final: '\uFB7F' },
  // Letter DDAL
  '\u0688': { isolated: '\uFB88', final: '\uFB89' },
  // Letter DAHAL
  '\u068C': { isolated: '\uFB84', final: '\uFB85' },
  // Letter DDAHAL
  '\u068D': { isolated: '\uFB82', final: '\uFB83' },
  // Letter DUL
  '\u068E': { isolated: '\uFB86', final: '\uFB87' },
  // Letter RREH
  '\u0691': { isolated: '\uFB8C', final: '\uFB8D' },
  // Letter JEH
  '\u0698': { isolated: '\uFB8A', final: '\uFB8B' },
  // Letter VEH
  '\u06A4': { isolated: '\uFB6A', initial: '\uFB6C', medial: '\uFB6D', final: '\uFB6B' },
  // Letter PEHEH
  '\u06A6': { isolated: '\uFB6E', initial: '\uFB70', medial: '\uFB71', final: '\uFB6F' },
  // Letter KEHEH
  '\u06A9': { isolated: '\uFB8E', initial: '\uFB90', medial: '\uFB91', final: '\uFB8F' },
  // Letter NG
  '\u06AD': { isolated: '\uFBD3', initial: '\uFBD5', medial: '\uFBD6', final: '\uFBD4' },
  // Letter GAF
  '\u06AF': { isolated: '\uFB92', initial: '\uFB94', medial: '\uFB95', final: '\uFB93' },
  // Letter NGOEH
  '\u06B1': { isolated: '\uFB9A', initial: '\uFB9C', medial: '\uFB9D', final: '\uFB9B' },
  // Letter GUEH
  '\u06B3': { isolated: '\uFB96', initial: '\uFB98', medial: '\uFB99', final: '\uFB97' },
  // Letter NOON GHUNNA
  '\u06BA': { isolated: '\uFB9E', final: '\uFB9F' },
  // Letter RNOON
  '\u06BB': { isolated: '\uFBA0', initial: '\uFBA2', medial: '\uFBA3', final: '\uFBA1' },
  // Letter HEH DOACHASHMEE
  '\u06BE': { isolated: '\uFBAA', initial: '\uFBAC', medial: '\uFBAD', final: '\uFBAB' },
  // Letter HEH WITH YEH ABOVE
  '\u06C0': { isolated: '\uFBA4', final: '\uFBA5' },
  // Letter HEH GOAL
  '\u06C1': { isolated: '\uFBA6', initial: '\uFBA8', medial: '\uFBA9', final: '\uFBA7' },
  // Letter KIRGHIZ OE
  '\u06C5': { isolated: '\uFBE0', final: '\uFBE1' },
  // Letter OE
  '\u06C6': { isolated: '\uFBD9', final: '\uFBDA' },
  // Letter U
  '\u06C7': { isolated: '\uFBD7', final: '\uFBD8' },
  // Letter YU
  '\u06C8': { isolated: '\uFBDB', final: '\uFBDC' },
  // Letter KIRGHIZ YU
  '\u06C9': { isolated: '\uFBE2', final: '\uFBE3' },
  // Letter VE
  '\u06CB': { isolated: '\uFBDE', final: '\uFBDF' },
  // Letter FARSI YEH
  '\u06CC': { isolated: '\uFBFC', initial: '\uFBFE', medial: '\uFBFF', final: '\uFBFD' },
  // Letter E
  '\u06D0': { isolated: '\uFBE4', initial: '\uFBE6', medial: '\uFBE7', final: '\uFBE5' },
  // Letter YEH BARREE
  '\u06D2': { isolated: '\uFBAE', final: '\uFBAF' },
  // Letter YEH BARREE WITH HAMZA ABOVE
  '\u06D3': { isolated: '\uFBB0', final: '\uFBB1' }
};

// accent / vowel marks
const HARAKAT_RE = new RegExp('[\u0610-\u061a\u064b-\u065f\u0670\u06d6-\u06dc\u06df-\u06e8\u06ea-\u06ed\u08d4-\u08e1\u08d4-\u08ed\u08e3-\u08ff]');

function _connects_with_letter_before(letter: string | number) {
  if (!LETTERS[letter]) {
    return false;
  }
  let forms = LETTERS[letter];
  return forms.final || forms.medial;
}

function _connects_with_letter_after(letter: string | number) {
  if (!LETTERS[letter]) {
    return false;
  }
  let forms = LETTERS[letter];
  return forms.initial || forms.medial;
}

function _connects_with_letters_before_and_after(letter: string | number) {
  if (!LETTERS[letter]) {
    return false;
  }
  let forms = LETTERS[letter];
  return forms.medial;
}

/* options
{
delete_harakat: false, // remove short vowel marks?
ligatures: true  // combine multiple letters into longer ligatures?
}
*/

export function reshape(text: string, options: { delete_harakat?: any; ligatures?: any; ignoreIsolates?: any; }) {
  if (!text) {
    return '';
  }
  if (!options) {
    options = {};
  }
  let output = [];

  const LETTER = 0
  const FORM = 1
  const NOT_SUPPORTED = -1

  // harakat and letters
  let delete_harakat = options.delete_harakat || false;
  for (let i = 0; i < text.length; i++) {
    let letter = text[i];

    // handle removing harakat
    if (delete_harakat && HARAKAT_RE.exec(letter)) {
      output.push(['', NOT_SUPPORTED]);
    }

    if (!LETTERS[letter]) {
      // handle non-Arabic letter
      output.push([letter, NOT_SUPPORTED]);
    } else if (!output.length) {
      // first Arabic letter - display isolated form
      output.push([letter, 'isolated'])
    } else {
      let previous_output = output[output.length - 1];
      if (previous_output[FORM] === NOT_SUPPORTED) {
        // not Arabic before this one
        output.push([letter, 'isolated']);
      } else if (!(_connects_with_letter_before(letter))) {
        // this letter doesn't try to connect with previous
        output.push([letter, 'isolated']);
      } else if (!(_connects_with_letter_after(previous_output[LETTER]))) {
        // previous letter doesn't try to connect to me
        output.push([letter, 'isolated']);
      } else if (previous_output[FORM] === 'final' && !_connects_with_letters_before_and_after(previous_output[LETTER])) {
        // previous letter was final and cannot be medial to connect to me
        output.push([letter, 'isolated']);
      } else if (previous_output[FORM] == 'isolated') {
        // previous letter was alone - we can change it to be initial of my phrase
        // for now this letter is the final of the phrase
        output[output.length - 1][1] = 'initial';
        output.push([letter, 'final']);
      } else {
        // previous letter can be changed to medial
        // this one can be final
        output[output.length - 1][1] = 'medial';
        output.push([letter, 'final']);
      }
    }
  }

  // ligatures
  if (options.ligatures !== false) {
    for (let x = 0; x < LIGATURES.length; x++) {
      let ligature = LIGATURES[x];
      for (let y = 0; y < ligature.matches.length; y++) {
        let pattern = ligature.matches[y];
        let textFragment = text;
        let textFragmentOffset = 0;
        while (textFragment.indexOf(pattern) > -1) {
          // determine which ligature form to use
          let a = textFragment.indexOf(pattern);
          let start_form = output[a + textFragmentOffset][FORM];
          let end_form = output[a + textFragmentOffset + pattern.length - 1][FORM];
          let ligature_form = null;

          /*
          +-----------+----------+---------+---------+----------+
          | a   \   b | ISOLATED | INITIAL | MEDIAL  | FINAL    |
          +-----------+----------+---------+---------+----------+
          | ISOLATED  | ISOLATED | INITIAL | INITIAL | ISOLATED |
          | INITIAL   | ISOLATED | INITIAL | INITIAL | ISOLATED |
          | MEDIAL    | FINAL    | MEDIAL  | MEDIAL  | FINAL    |
          | FINAL     | FINAL    | MEDIAL  | MEDIAL  | FINAL    |
          +-----------+----------+---------+---------+----------+
          */

          if (start_form === 'isolated' || start_form === 'initial') {
            if (end_form === 'isolated' || end_form === 'final') {
              ligature_form = 'isolated';
            } else {
              ligature_form = 'initial';
            }
          } else {
            if (end_form === 'isolated' || end_form === 'final') {
              ligature_form = 'final';
            } else {
              ligature_form = 'medial';
            }
          }
          // @ts-ignore
          if (!ligature.forms[ligature_form]) {
            // this ligature cannot be applied in this location
            textFragmentOffset += a + 1;
            textFragment = textFragment.substring(textFragmentOffset);
            continue;
          }
          // @ts-ignore
          output[a + textFragmentOffset][0] = ligature.forms[ligature_form];
          output[a + textFragmentOffset][1] = NOT_SUPPORTED;
          for (let z = a + textFragmentOffset + 1; z < a + textFragmentOffset + pattern.length; z++) {
            output[z] = ['', NOT_SUPPORTED];
          }
          textFragmentOffset += a + 1;
          textFragment = textFragment.substring(textFragmentOffset);
        }
      }
    }
  }

  return output.map(function (o) {
    // @ts-ignore
    if (o[FORM] === NOT_SUPPORTED && o[LETTER].length) {
      return o[LETTER];
    } else if (options.ignoreIsolates && o[FORM] === 'isolated') {
      return o[LETTER] || '';
    } else {
      // @ts-ignore
      return (LETTERS[o[LETTER]] || {})[o[FORM]] || '';
    }
  }).join('');
}
const fs = require('fs');
const filePath = 'c:/Users/jayde/Downloads/HTML/quiz-app/week8.js';
let content = fs.readFileSync(filePath, 'utf8');

const hints = {
  patents: "Patents protect inventions, new processes, and functional innovations, giving inventors exclusive rights for a fixed term (often 20 years). They require public disclosure, payment of maintenance fees, and consist of specifications, drawings, and claims (which define the legal scope of protection).",
  tradeSecrets: "Trade secrets protect confidential information and formulas indefinitely, provided they remain a secret (often enforced via NDAs). However, they are vulnerable to independent discovery and reverse engineering.",
  copyright: "Copyright protects the expression of ideas (like artistic, literary, or musical works), not the ideas themselves. It applies automatically upon creation in a material form, without needing formal registration, and generally lasts for 70 years after the creator's death.",
  trademarks: "Trademarks protect brand identifiers such as logos, names, and slogans. Unlike copyrights, they typically require formal registration and can last indefinitely as long as they are actively used in commerce.",
  designs: "Registered designs (or design patents) protect the visual appearance and aesthetics of a product, distinct from patents which protect functionality."
};

const mapping = {
  'q_w8_3': [hints.patents],
  'q_w8_4': [hints.patents],
  'q_w8_7': [hints.patents],
  'q_w8_9': [hints.patents],
  'q_w8_13': [hints.patents],
  'q_w8_21': [hints.patents],
  'q_w8_24': [hints.patents],
  'q_w8_25': [hints.patents],
  'q_w8_26': [hints.patents],
  'q_w8_27': [hints.patents],
  'q_w8_30': [hints.patents],
  'q_w8_31': [hints.patents],
  'q_w8_34': [hints.patents],
  'q_w8_36': [hints.patents],
  'q_w8_39': [hints.patents],
  'q_w8_41': [hints.patents],
  'q_w8_43': [hints.patents],
  'q_w8_45': [hints.patents],
  'q_w8_46': [hints.patents],
  'q_w8_47': [hints.patents],
  'q_w8_5': [hints.tradeSecrets],
  'q_w8_8': [hints.tradeSecrets],
  'q_w8_14': [hints.tradeSecrets],
  'q_w8_15': [hints.tradeSecrets],
  'q_w8_17': [hints.tradeSecrets],
  'q_w8_29': [hints.tradeSecrets],
  'q_w8_40': [hints.tradeSecrets],
  'q_w8_42': [hints.tradeSecrets],
  'q_w8_48': [hints.tradeSecrets],
  'q_w8_2': [hints.copyright],
  'q_w8_6': [hints.copyright],
  'q_w8_10': [hints.copyright],
  'q_w8_19': [hints.copyright],
  'q_w8_20': [hints.copyright],
  'q_w8_22': [hints.copyright],
  'q_w8_35': [hints.copyright],
  'q_w8_12': [hints.trademarks],
  'q_w8_32': [hints.trademarks],
  'q_w8_33': [hints.copyright, hints.trademarks],
  'q_w8_37': [hints.copyright, hints.trademarks],
  'q_w8_16': [hints.designs],
  'q_w8_18': [hints.designs],
  'q_w8_28': [hints.designs],
  'q_w8_44': [hints.designs]
};

// Regex to find each question block: matches from id: "q_w8_..." to correctIndex: X }
for (const [id, hintArr] of Object.entries(mapping)) {
  const combinedHint = hintArr.join(' ');
  const regex = new RegExp(`(id:\\s*["']${id}["'][\\s\\S]*?correctIndex:\\s*\\d+)\\s*\\}`, 'g');
  
  content = content.replace(regex, (match, p1) => {
    return p1 + `,\n    hint: "${combinedHint}"\n  }`;
  });
}

fs.writeFileSync(filePath, content);
console.log('Done modifying week8.js');

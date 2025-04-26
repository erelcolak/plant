const turkishChars: string[] = ["ı", "İ", "ü", "Ü", "ö", "Ö", "ş", "Ş", "ç", "Ç", "ğ", "Ğ"];
const englishChars: string[] = ["i", "I", "u", "U", "o", "O", "s", "S", "c", "C", "g", "G"];

/**
 * @function convertTextToEnglish
 * @param text text parameter
 * @returns {string}
 */
export const convertTextToEnglish = (text: string) => {
  let replacedText = text || "";
  for (let i = 0; i < turkishChars.length; i++) {
    replacedText = replacedText?.replace(turkishChars[i], englishChars[i]);
  }
  return replacedText.toLowerCase();
};

/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                              *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String   *
 *                                                                                           *
 ******************************************************************************************* */
// решаем и запускаем тест.
function concatenateStrings(value1, value2) {
  return value1 + value2;
}
function getStringLength(value) {
  return value.length;
}
function getStringFromTemplate(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}!`;
}
function extractNameFromTemplate(value) {
  return value.slice(7, -1);
}
function getFirstChar(value) {
  return value.slice(0, 1);
}
function removeLeadingAndTrailingWhitespaces(value) {
  return value.trim();
}
function repeatString(value, count) {
  return value.repeat(count);
}
function removeFirstOccurrences(str, value) {
  return str.replace(value, '');
}
function unbracketTag(str) {
  return str.slice(1, -1);
}
function convertToUpperCase(str) {
  return str.toUpperCase();
}
function extractEmails(str) {
  return str.split(';');
}
function getRectangleString(width, height) {
  const firstStr = `┌${'─'.repeat(width - 2)}┐\n`;
  const middleStr = `│${' '.repeat(width - 2)}│\n`;
  const lastStr = `└${'─'.repeat(width - 2)}┘\n`;
  return `${firstStr}${middleStr.repeat(height - 2)}${lastStr}`;
}
function encodeToRot13(str) {
  let result = '';
  for (let i = 0; i < str.length; i += 1) {
    const char = str[i];
    let charNum = char.charCodeAt(0);
    if (charNum >= 65 && charNum <= 90) {
      charNum = ((charNum - 65 + 13) % 26) + 65; // код 'A' = 65
    } else if (charNum >= 97 && charNum <= 122) {
      charNum = ((charNum - 97 + 13) % 26) + 97; // код 'a' = 97
    }
    result += String.fromCharCode(charNum);
  }
  return result;
}
function isString(value) {
  return typeof value === 'string' || value instanceof String;
}
function getCardId(value) {
  const cardsArr = [
    'A♣', '2♣', '3♣', '4♣', '5♣', '6♣', '7♣', '8♣', '9♣', '10♣', 'J♣', 'Q♣', 'K♣',
    'A♦', '2♦', '3♦', '4♦', '5♦', '6♦', '7♦', '8♦', '9♦', '10♦', 'J♦', 'Q♦', 'K♦',
    'A♥', '2♥', '3♥', '4♥', '5♥', '6♥', '7♥', '8♥', '9♥', '10♥', 'J♥', 'Q♥', 'K♥',
    'A♠', '2♠', '3♠', '4♠', '5♠', '6♠', '7♠', '8♠', '9♠', '10♠', 'J♠', 'Q♠', 'K♠',
  ];
  return cardsArr.indexOf(value);
}


module.exports = {
  concatenateStrings,
  getStringLength,
  getStringFromTemplate,
  extractNameFromTemplate,
  getFirstChar,
  removeLeadingAndTrailingWhitespaces,
  repeatString,
  removeFirstOccurrences,
  unbracketTag,
  convertToUpperCase,
  extractEmails,
  getRectangleString,
  encodeToRot13,
  isString,
  getCardId,
};

// Manik Sachdeva: msach22
// reverse word order in a sentence
// Input: "I am the king"
// Output: "king the am I"
/*
* @param {string} sentence - a sentence
* @returns {string} result - reveresed word order
*/

const reverseInput = (string) => {
  let newString = '';
  for (let i = string.length - 1; i >= 0; i--) {
     newString += string[i];
  };
  return newString;
}
const solution = (sentence) => {
  if (sentence.length < 2) {
    return "Incorrect Data Format";
  }
  let newString = reverseInput(sentence);
  let subString = '';
  let result = [];
  for (let j = 0; j < newString.length; j++) {
    if (newString[j] === ' ' ) {
      result.push(reverseInput(subString));
      subString = '';
    } else if (j === newString.length - 1) {
        subString += newString[j];
        result.push(reverseInput(subString));
    } else {
        subString += newString[j];
    }
}
return result.join(' ');
};

module.exports = {
  solution
};

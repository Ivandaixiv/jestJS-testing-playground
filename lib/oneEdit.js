const oneEdit = (originalWord, newWord) => {
  if (!originalWord || !newWord) return;
  let oneEdit = false;

  if (originalWord.length < newWord.length) {
    newWord = newWord.split(originalWord).join("");
    if (newWord.length === 1) {
      oneEdit = true;
    }
  } else {
    originalWord = originalWord.split(newWord).join("");
    if (originalWord.length === 1) {
      oneEdit = true;
    }
  }
  // split and then compare remaining string and the full word
  return oneEdit;
};
module.exports = oneEdit;

const uniqueChar = string => {
  //   if (!string) return;
  //   for (let i = 0; i < string.length; i++) {
  //     let char = string[i];
  //     let isUnique = true;
  //     for (let j = 0; j < string.length; j++) {
  //       if (char === string[j] && i !== j) {
  //         isUnique = false;
  //       }
  //     }
  //     if (isUnique) return char;
  //   }
  //   if (!string) return;
  //   for (let i = 0; i < string.length; i++) {
  //     let char = string[i];
  //     let charCount = string.split(new RegExp(char, "gi")).length - 1;
  //     if (charCount === 1) {
  //       return string[i];
  //     }
  //   }
  if (!string) return;
  let char = "";
  for (let i = 0; i < string.length; i++) {
    char = string[i];
    let charCount = string.split(new RegExp(char, "gi")).length - 1;
    if (charCount === 1) {
      return char;
    }
  }
};
module.exports = uniqueChar;

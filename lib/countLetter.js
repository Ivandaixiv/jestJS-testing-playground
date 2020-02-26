const countLetters = str => {
  str = str
    .split(" ")
    .join("")
    .toLowerCase();
  let strCount = "";
  for (let i = 0; i < str.length; i++) {
    if (!strCount.match(str[i])) {
      strCount = strCount + str[i] + 1;
    } else {
      //   console.log(strCount.match(str[i], str[i + 1]).index);
      let index = strCount.match(str[i], str[i + 1]).index;
      strCount = strCount[index + 1] + 1;
    }
  }
  return strCount;
};
module.exports = countLetters;

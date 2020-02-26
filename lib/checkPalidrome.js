const checkPalindrome = str => {
  if (typeof str != "string") {
    throw new Error("Input value is not a string!");
  }
  str = str
    .split(" ")
    .join("")
    .toLowerCase();
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
  }
  return true;
};

module.exports = checkPalindrome;

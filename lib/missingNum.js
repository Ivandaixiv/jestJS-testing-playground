const missingNum = numbers => {
  if (!numbers) return;
  numbers = numbers.sort();
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i + 1] - numbers[i] > 1) {
      return numbers[i] + 1;
    }
  }
};
module.exports = missingNum;

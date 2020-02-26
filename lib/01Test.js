const test = () => {
  var arr = [1, 2, 3, 4, 5];

  // 0(1)
  console.log(arr[4]);
  // 0(n)
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
  // 0(n^2)
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[j]);
    }
  }
  // 0(n^n)
  uselessLoop = (n, count) => {
    if (count === 0) return;
    for (let i = 0; i < n; i++) {
      uselessLoop(n, count - 1);
    }
  };
  factorial = number => {
    var val = i;
    for (let i = 2; i <= number; i++) {
      val = val * i;
    }
    return val;
  };
};
module.exports = test;

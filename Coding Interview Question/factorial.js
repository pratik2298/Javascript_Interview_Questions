let num = 5;

function getFactorial(num) {
  if (num === 0) {
    return 1;
  } else {
    return num * getFactorial(num - 1);
  }
}

console.log(getFactorial(num));

function isArmStrongNumber(number) {
  let sum = 0;

  const str = number.toString();
  for (let i = 0; i < str.length; i++) {
    const digit = parseInt(str[i]);
    sum += Math.pow(digit, str.length);
  }

  return number === sum;
}

console.log(isArmStrongNumber(123));

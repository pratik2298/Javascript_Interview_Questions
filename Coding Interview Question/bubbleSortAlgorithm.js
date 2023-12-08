const numbers = [90, 2, 89, 12, 45];

function bubbleSort(number) {
  for (let i = 0; i < number.length; i++) {
    for (let j = 0; j < number.length - i - 1; j++) {
      if (number[j] > number[j + 1]) {
        let temp = number[j];
        number[j] = number[j + 1];
        number[j + 1] = temp;
      }
    }
  }
  return number;
}

console.log("Numbers", bubbleSort(numbers));

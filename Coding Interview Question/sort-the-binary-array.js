const binaryArray = ["11", "10", "01"];

//converting binary array to decimal array
const decimalArray = binaryArray.map((item) => parseInt(item, 2));

// sorting array in ascending order
// const sortedDecimalArray = decimalArray.sort((a, b) => a - b);
// console.log(sortedDecimalArray);

console.log(sortArray(decimalArray));

// sorting array using bubble sort algorithm
function sortArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

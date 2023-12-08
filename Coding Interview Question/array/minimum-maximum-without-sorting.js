const numbers = [5, 3, 9, 1, 7, 2];

let min = numbers[0];
let max = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] < min) {
    min = numbers[i];
  }

  if (numbers[i] > max) {
    max = numbers[i];
  }
}

console.log("Minimum:", min); // Output: 1
console.log("Maximum:", max); // Output: 9

const str = "Hello Word";

const splitString = str.split(" ");

console.log(splitString.reverse());

const result = splitString.map((string) => string.split("").reverse().join(""));
console.log(result);

const reversedStr = result.join(" ");
console.log(reversedStr);



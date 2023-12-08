let string = "Missipppiaiididiia";
let arr = [];

let newObj = {};
for (let i = 0; i < string.length; i++) {
  let count = 1;
  for (let j = 0; j < string.length; j++) {
    if (string[i] === string[j]) {
      if (string[i] in newObj) {
        newObj[string[i]] = count++;
      } else {
        newObj[string[i]] = 1;
      }
    }
  }
}

console.log(newObj);

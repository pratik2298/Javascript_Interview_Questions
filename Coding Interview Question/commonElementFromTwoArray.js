function getCommonArrayValue(a, b) {
  let k = [];
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] === b[j]) {
        k.push(a[j]);
        break;
      }
    }
  }
  return k;
}

console.log(getCommonArrayValue([1, 3, 4, 5, 6, 7], [1, 3, 4, 2, 1]));

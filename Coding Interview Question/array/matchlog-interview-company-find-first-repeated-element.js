function findrepetativeElemet(arr) {
  let repeatElement;
  let isElementRepeated = false;
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1 && !isElementRepeated) {
      return `no repeat element`;
    }
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        repeatElement = arr[i];
        isElementRepeated = true;
        break;
      }
    }
    if (isElementRepeated) break;
  }
  return repeatElement;
}

console.log(findrepetativeElemet([15, 15, 1, 9, 8, 1, 12, 19, 8, 7]));

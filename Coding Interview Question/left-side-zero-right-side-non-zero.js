function ZeroFirstArray(arr) {
  let tempArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      tempArray.unshift(arr[i]);
    } else {
      tempArray.push(arr[i]);
    }
  }
  return tempArray;
}

console.log(`output`, ZeroFirstArray([1, 20, 200, 98, 0, 0, 2, 99, 0, 3, 0]));

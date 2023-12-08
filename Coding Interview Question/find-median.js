function getMedian(arr) {
  let medianValue;
  const length = arr.length;
  if (length % 2 === 0) {
    medianValue = (arr[length / 2 - 1] + arr[length / 2]) / 2;
  } else {
    medianValue = arr[Math.floor(length / 2)];
  }
  return medianValue;
}

console.log(`Median`, getMedian([1, 2, 3, 4, 5,]));

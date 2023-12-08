
// recursion concept
function flattenArray(nestedArray) {
    let flatArray = [];
    for (const item of nestedArray) {
      console.log(item)
      if (Array.isArray(item)) {
        flatArray = flatArray.concat(flattenArray(item));
      } else {
        flatArray.push(item);
      }
    }
    return flatArray;
  }
  
  const arr = [[[1, [2, 3, 4]], [5]], [6]];
  const output = flattenArray(arr);
  console.log(output); // Output: [1, 2, 3, 4, 5, 6]
  
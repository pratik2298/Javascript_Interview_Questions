// 1st Approach
let tempArray = [];
let mainTempArray = [];
function demo(arr) {
  for (let i = 0; i < arr.length; i++) {
    let numberInString = arr[i].toString();
    tempArray = [];
    for (let j = 0; j < numberInString.length; j++) {
      tempArray.push(numberInString[j]);
    }
    mainTempArray.push(tempArray);
  }
  return mainTempArray;
}

// 2nd Approach
const convertArrayToStringArray = (arr) => {
  const output = arr.map((item) => item.toString().split(""));
  console.log(output);
};

console.log(`array`, convertArrayToStringArray([123, 456]));

//

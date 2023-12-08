const a = [1, 2, 1, 3, 1, 4, 2, 4, 1, 4];

const uniqueArray = [];
const getUniqueArray = () => {
  for (let i = 0; i < a.length; i++) {
    if (!uniqueArray.length) {
      uniqueArray.push(a[i]);
    } else {
      for (let j = 0; j < uniqueArray.length; j++) {
        if (a[i] === uniqueArray[j]) {
          console.log("Duplicate found");
        }
      }
      uniqueArray.push(a[i]);
    }
  }

  console.log(uniqueArray);
};

getUniqueArray();

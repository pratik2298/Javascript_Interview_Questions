function isPalindrome(string) {
  let j = string.length - 1;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[j]) {
      if (i === j) {
        return true;
      } else {
        j--;
      }
    } else {
      return false;
    }
  }
}

console.log(`palindrom`, isPalindrome("Pratik"));

// function isPalindrome(string) {
//     let j = string.length - 1;
//     for (let i = 0; i < string.length; i++) {
//       if (string[i] === string[j]) {
//         if (i === j) {
//           return true;
//         } else {
//           j--;
//         }
//       } else {
//         return false;
//       }
//     }
//   }

//   console.log(`palindrom`, isPalindrome("racecarlopso"));

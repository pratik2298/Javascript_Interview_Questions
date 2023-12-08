function longestCommonPrefix(strs) {
  if (!strs || strs.length === 0) {
    return "";
  }

  // Sort the array of strings to find the shortest string
  strs.sort();

  // Get the shortest string
  const shortestStr = strs[0];

  // Iterate over each character in the shortest string
  for (let i = 0; i < shortestStr.length; i++) {
    // Check if the current character exists in all strings

    for (let j = 1; j < strs.length; j++) {
      console.log(`shortestStr[i]`, shortestStr[i], `strs[j][i]`, strs[j][i]);
      if (shortestStr[i] !== strs[j][i]) {
        // Return the common prefix up to the current index
        return shortestStr.slice(0, i);
      }
    }
  }

  // Return the entire shortest string since it is the common prefix
  return shortestStr;
}

const strs = ["flower", "flow", "flight"];
const commonPrefix = longestCommonPrefix(strs);
console.log(commonPrefix); // Output: "fl"

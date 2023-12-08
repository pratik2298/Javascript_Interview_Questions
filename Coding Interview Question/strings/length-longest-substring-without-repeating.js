const lengthOfLongestSubString = (str) => {

    let left = 0;
    let right = 0;
    let maxLength = 0;
    let stringLength = str.length;
    const charSet = new Set();

    while(right < stringLength){
        if(!charSet.has(str[right])){
            charSet.add(str[right]);
            maxLength = Math.max(maxLength, (right-left+1));
            right++;
        }
        else{
            charSet.delete(str[left]);
            left++;
        }
    }

    return maxLength;
}


console.log(`lengthOfLongestSubString`, lengthOfLongestSubString(`abcabceeff`))
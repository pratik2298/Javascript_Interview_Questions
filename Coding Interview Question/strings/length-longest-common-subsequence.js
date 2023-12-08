
const lcsSubStr = (str1, str2) => {
    let ans = 0
    for(let i=0; i<str1.length; i++){
        for(let j=0; j<str2.length; j++){
            let k=0
            while((i+k) < str1.length && (j+k) < str2.length && str1[i+k] == str2[j+k]){
                k=k+1
            }
            ans = Math.max(ans, k)
        }
    }
    return ans
}

console.log(lcsSubStr("dadef", "adwce"))
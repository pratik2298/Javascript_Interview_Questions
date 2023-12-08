const countVowelsAndConsonants = (str) => {
let vowelCount = 0;
let consonantCount = 0;

for(let i=0; i<str.length; i++){
    if(str[i] === 'a' || str[i] === 'A' || str[i] === 'e' || str[i] === 'E' || str[i] === 'i' || 
    str[i] === 'I' || str[i] === 'o' || str[i] === 'O' || str[i] === 'u' || str[i] === 'U'){
        vowelCount++;
    }
    else{
        consonantCount++;
    }
}
return {
    vowelCount,
    consonantCount
}
}

console.log(countVowelsAndConsonants('Pratik'))
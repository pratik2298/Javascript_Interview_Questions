

const printDuplicateCharacter = (str) => {
    let duplicateCharArray = [];
    for(let i=0; i<str.length; i++){
        for(let j=i+1; j<str.length; j++){
            if(str[i] === str[j]){
                if(!duplicateCharArray.includes(str[i])){
                    duplicateCharArray.push(str[i]);
            }
        }
    }
}
return duplicateCharArray
}

console.log(`printDuplicateCharacter`, printDuplicateCharacter('Missisippi'))
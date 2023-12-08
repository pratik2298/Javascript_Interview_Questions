

const printFirstNonRepeatedCharacter = (str) => {
    let nonRepeatedCharacterArray = [];
    let repeatedCharacterArray = [];
    for(let i=0; i<str.length; i++){
        for(let j=i+1; j<str.length; j++){
            if(str[i] === str[j]){
                repeatedCharacterArray.push(str[i])
                break;
            }
            else if(repeatedCharacterArray.includes(str[i])){
                repeatedCharacterArray.push(str[i])
            }
          else  if(j === str.length-1){
                nonRepeatedCharacterArray.push(str[i])
            }
           
        }
    }
    return nonRepeatedCharacterArray
}

console.log(`nonRepeatedCharacter`, printFirstNonRepeatedCharacter(`abracadabra`).shift())

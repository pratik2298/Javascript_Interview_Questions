


const getMissingNumberFromAnArray = (numbers) => {
    const numberSet = new Set(numbers)
    const missingNumberArray = [];
    
    for(i=1; i<=10; i++){
        if(!numberSet.has(i)){
            missingNumberArray.push(i)
        }
    }
    return missingNumberArray;
}

const result =  getMissingNumberFromAnArray([1, 2, 3, 5, 6, 7])
console.log(result[0])


function printPattern(size){

    const isOdd = size%2 !== 0;
  
    for(let i=0; i<size; i++){
      let row = "";
      for(let j=0; j<size; j++){
        if(i===0 || i === size-1 || j===0 || j=== size-1 || (isOdd && i===j) || (isOdd && i+j === size-1)){
          row +="*"
        }
        else{
          row+=' '
        }
      }
      console.log(row);
    }
  }
  
  
  printPattern(9)
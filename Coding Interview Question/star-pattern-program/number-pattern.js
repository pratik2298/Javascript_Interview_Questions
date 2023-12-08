function generatePattern(rows) {
    let output = "";
    let currentNumber = 1;
  
    for (let i = 1; i <= rows; i++) {
      for (let j = 1; j <= i; j++) {
        output += currentNumber + " ";
        currentNumber++;
      }
      output += "\n";
    }
  
    return output;
  }
  
  const rows = 4;
  const pattern = generatePattern(rows);
  console.log(pattern);
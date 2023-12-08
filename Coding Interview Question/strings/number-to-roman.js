function numberToRoman(number) {
    const numerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    
    let roman = '';
  
    for (let i = 0; i < values.length; i++) {
      while (number >= values[i]) {
        roman += numerals[i];
        number -= values[i];
      }
    }
  
    return roman;
  }
  

  const result = numberToRoman(200);
  console.log(`result: ${result}`);
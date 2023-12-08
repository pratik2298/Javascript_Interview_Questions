

const checkStringContainDigits =(str) => {
    let regex = /\d/;
    return regex.test(str)
}

console.log(checkStringContainDigits(`HelloWord`));
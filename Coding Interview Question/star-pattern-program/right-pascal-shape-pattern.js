

let n = 5;
let string = '';

for(let i=1; i<=n; i++){
    for(let j=1; j<=i; j++){
        string+='*'
    }
    string+=`\n`;
}
for(let i=0; i<n; i++){
    for(let j=0; j<n-i; j++){
        string+='*'
    }
    string+=`\n`;
}

console.log(string);
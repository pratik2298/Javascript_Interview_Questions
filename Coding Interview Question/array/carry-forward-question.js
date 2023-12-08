

function carryForward(arr){

    let carry = 1
    for(let i = arr.length - 1; i >= 0; i--){
         let sum = 0;
         sum = arr[i] + carry;

        if(sum > 9){
            carry = 1
            arr[i] = 0
        }
        else{
            carry = 0
            arr[i] = sum;
        }
        
    }
    if(carry){
        arr.unshift(1)
    }

    return arr;
}

console.log(carryForward([9,9,9]))
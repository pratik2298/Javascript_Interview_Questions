



function swapWithOutUsingVariable(a, b){
    console.log("before swapping", a, b)
    a = a+b;
    b = a-b;
    a = a-b;

    console.log("after swapping", a, b)
}

swapWithOutUsingVariable(2, 4)
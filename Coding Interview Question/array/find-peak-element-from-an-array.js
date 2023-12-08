

const findPeakElementFromAnArray = (arr) => {
    let left;
    let right;
    let mid;
    let peakValue = 0

    for(let i=0; i<arr.length; i++) {
        left = arr[i-1];
        right = arr[i+1];
        mid = arr[i];

        if(mid>left) {
            peakValue = mid;
        }
        else if(mid<left){
            peakValue = left
        }
        else if(mid > right){
            peakValue = mid
        }
        else if(mid < right){
            peakValue = right
        }
    }

    return peakValue;
}

console.log(`findPeakElementFromAnArray`, findPeakElementFromAnArray([10, 20, 15, 2, 23, 90, 67]))
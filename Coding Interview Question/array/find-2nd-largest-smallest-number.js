const find2ndLargestAndSmallestNumber = (arr) => {
    let max1 = arr[0];
    let min1 = arr[0];
    let max2 = null;
    let min2 = null;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min1) {
            min2 = min1;
            min1 = arr[i];
        } else if (arr[i] < min2 || min2 === null) {
            min2 = arr[i];
        }

        if (arr[i] > max1) {
            max2 = max1;
            max1 = arr[i];
        } else if (arr[i] > max2 || max2 === null) {
            max2 = arr[i];
        }
    }

    return {
        max1: max1,
        min1: min1,
        max2: max2,
        min2: min2
    };
};

const result = find2ndLargestAndSmallestNumber([1, 2, 4, 78, 9, 11, 101]);
console.log(result);

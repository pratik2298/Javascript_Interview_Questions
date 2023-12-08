//    Write a program to print all the LEADERS in the array. 
//    An element is a leader if it is greater than all the elements to its right side. 
//    And the rightmost element is always a leader. 


// // Input: arr[] = {16, 17, 4, 3, 5, 2}, 
// // Output: 17, 5, 2

// // Input: arr[] = {1, 2, 3, 4, 5, 2}, 
// // Output: 5, 2

function findLeaders(arr) {
    const n = arr.length;
    const leaders = [];
    let maxRight = arr[n - 1];
    leaders.push(maxRight);

    for (let i = n - 2; i >= 0; i--) {
        if (arr[i] > maxRight) {
            maxRight = arr[i];
            leaders.push(maxRight);
        }
    }

    return leaders.reverse();
}

// Test cases
const arr1 = [16, 17, 4, 3, 5, 2];
const arr2 = [1, 2, 3, 4, 5, 2];

console.log("Input:", arr1);
console.log("Output:", findLeaders(arr1));

console.log("Input:", arr2);
console.log("Output:", findLeaders(arr2));

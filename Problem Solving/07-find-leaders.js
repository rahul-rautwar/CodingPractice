// Write a program to print all the LEADERS in the array. An element is a leader if it is greater than all the elements to its right side. And the rightmost element is always a leader.

// For example:

// Input: arr[] = {16, 17, 4, 3, 5, 2},
// Output: 17, 5, 2

// Input: arr[] = {1, 2, 3, 4, 5, 2},
// Output: 5, 2

function findLeaders(arr) {
  let leadersArr = [];
  for (let i = 0; i < arr.length; i++) {
    let j;
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] <= arr[j]) {
        break;
      }
    }
    if (j == arr.length) leadersArr.push(arr[i]);
  }
  return leadersArr;
}

console.log("Find Leaders", findLeaders([16, 17, 4, 3, 5, 2]));
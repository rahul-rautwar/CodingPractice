// Given an array arr[] of non-negative integers and an integer sum, find a subarray that adds to a given sum.

// Note: There may be more than one subarray with sum as the given sum, print first such subarray.

// Examples:

// Input: arr[] = {1, 4, 20, 3, 10, 5}, sum = 33
// Output: Sum found between indexes 2 and 4
// Explanation: Sum of elements between indices 2 and 4 is 20 + 3 + 10 = 33

function subarraySum(arr, sum) {
  let indexArray = [];
  for (let i = 0; i < arr.length; i++) {
    currentSum = arr[i];
    if (currentSum == sum) {
      indexArray.push(i);
      return indexArray;
    } else {
      for (let j = i + 1; j < arr.length; j++) {
        currentSum += arr[j];
        if (currentSum == sum) {
          indexArray.push(i);
          indexArray.push(j);
          return indexArray;
        }
      }
    }
  }
}
console.log("Subarray Sum", subarraySum([15, 2, 4, 8, 9, 5, 10, 23], 23));

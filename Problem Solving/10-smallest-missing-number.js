// Given a sorted array of n distinct integers where each integer is in the range from 0 to m-1 and m > n. Find the smallest number that is missing from the array.

// Examples:

// Input: {0, 1, 2, 6, 9}, n = 5, m = 10
// Output: 3

// Input: {4, 5, 10, 11}, n = 4, m = 12
// Output: 0

// Input: {0, 1, 2, 3}, n = 4, m = 5
// Output: 4

// Input: {0, 1, 2, 3, 4, 5, 6, 7, 10}, n = 9, m = 11
// Output: 8

function smallestMissingNumber(arr, m) {
  let tempArray = [];
  for (var i = 0; i < m; i++) {
    if (i !== arr[i]) {
      return i;
    }
  }
}

console.log("smallestMissingNumber", smallestMissingNumber([10, 11, 12], 4));

console.log(
  "smallestMissingNumber",
  smallestMissingNumber([0, 1, 2, 6, 9], 10)
);

console.log("smallestMissingNumber", smallestMissingNumber([4, 5, 10, 11], 12));

console.log("smallestMissingNumber", smallestMissingNumber([0, 1, 2, 3], 5));

console.log(
  "smallestMissingNumber",
  smallestMissingNumber([0, 1, 2, 3, 4, 5, 6, 7, 10], 11)
);

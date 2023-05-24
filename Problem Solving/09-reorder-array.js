// Given two integer arrays of same size, “arr[]” and “index[]”, reorder elements in “arr[]” according to given index array. It is not allowed to given array arr’s length.

// Example:

// Input:  arr[]   = [10, 11, 12];
//             index[] = [1, 0, 2];
// Output: arr[]   = [11, 10, 12]
//           index[] = [0,  1,  2]

// Input:  arr[]   = [50, 40, 70, 60, 90]
//           index[] = [3,  0,  4,  1,  2]
// Output: arr[]   = [40, 60, 90, 50, 70]
//           index[] = [0,  1,  2,  3,   4]

function reorderArray(arr, indexArray) {
  let tempArray = [];
  for (var i = 0; i < indexArray.length; i++) {
    tempArray[indexArray[i]] = arr[i];
  }
  return tempArray;
}

console.log("Reorder Array", reorderArray([10, 11, 12], [1, 0, 2]));

console.log(
  "Reorder Array",
  reorderArray([50, 40, 70, 60, 90], [3, 0, 4, 1, 2])
);

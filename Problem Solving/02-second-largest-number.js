/**
 * Given an array of integers, our task is to write a program that efficiently finds the second-largest element present in the array.
 * Examples :
 * Input: arr[] = {10, 4, 3, 50, 23, 90}
 * Output: 50
 *
 */

function findSecondLargest(arr, n) {
  let tempArray = arr.sort((a, b) => b - a);
  console.log(tempArray);
  return tempArray[n - 1];
}
console.log(
  "Second Largest number!",
  findSecondLargest([10, 4, 3, 50, 23, 90], 2)
);

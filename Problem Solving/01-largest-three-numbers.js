/**
 * Given an array with all distinct elements, find the largest three elements. Expected time complexity is O(n) and extra space is O(1).
 * Examples :
 * Input: arr[] = {10, 4, 3, 50, 23, 90}
 * Output: 90, 50, 23
 *
 */

function findLargest(arr, n) {
  let tempArray = arr.sort((a, b) => b - a);
  console.log(tempArray);
  let largest = [];
  for (let i = 0; i < n; i++) {
    largest.push(tempArray[i]);
  }
  return largest;
}
console.log("Largest 'n' numbers!", findLargest([10, 4, 3, 50, 23, 90], 3));

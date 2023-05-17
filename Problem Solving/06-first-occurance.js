// Given an array of integers. All numbers occur twice except one number which occurs once.
// Input:  arr[] = {2, 3, 5, 4, 5, 3, 4}
// Output: 2

function firstOccurance(arr) {
  let charCount = {};

  for (let i = 0; i < arr.length; i++) {
    let char = arr[i];
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }
  for (let c in charCount) {
    if (charCount[c] == 1) {
      return c;
    }
  }
}

console.log("First Occurance!", firstOccurance([2, 3, 5, 4, 5, 3, 4]));

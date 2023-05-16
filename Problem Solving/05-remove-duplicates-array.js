//Program to print all distinct elements in a given array
// remove deplicates from array

function removeDuplicates(arr) {
  let exists = {},
    tempArr = [];

  for (let i = 0; i < arr.length; i++) {
    let char = arr[i];
    if (!exists[char]) {
      tempArr.push(char);
      exists[char] = true;
    }
  }
  return tempArr;
}
console.log("Hello, World!", removeDuplicates([6, 10, 5, 4, 9, 120, 4, 6, 10]));

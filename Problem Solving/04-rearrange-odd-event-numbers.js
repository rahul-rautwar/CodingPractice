// JavaScript program to rearrange the elements
// in the array such that even positioned are
// greater than odd positioned elements

function arrangeOddEven(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (i % 2 == 0) {
      if (arr[i] > arr[i - 1]) {
        temp = arr[i];
        arr[i] = arr[i - 1];
        arr[i - 1] = temp;
      }
    } else {
      if (arr[i] < arr[i - 1]) {
        temp = arr[i];
        arr[i] = arr[i - 1];
        arr[i - 1] = temp;
      }
    }
  }
  return arr;
}

console.log("Rearrange odd even!", arrangeOddEven([1, 3, 2, 2, 5]));

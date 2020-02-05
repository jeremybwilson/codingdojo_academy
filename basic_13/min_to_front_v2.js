// Array: Min to Front -> Example 2 taken from Cristian

// Given an array of comparable values, move the lowest element to array’s front, 
// shifting backward any elements previously ahead of it.
// Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. 

function minToFront(array) {
  // previous removeAt function to remove array value at a specified index (idx)
  function removeAt(arr, idx) {
    let value = arr[idx];
    for (let i = idx; i < arr.length-1; i++) {
      arr[i] = arr[i+1];
    }
    arr.pop();
  }

  // previous pushFront function to push value (val) to the front of the array
  function pushFront(arr, val) {
    for (let i = arr.length; i > 0; i--) {
      arr[i] = arr[i-1];
    }
    arr[0] = val;
  }

  let index = 0;
  let min = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
      index = i;
    }
  }
  removeAt(array, index);
  pushFront(array, min);

  return array;
}

console.log(minToFront([4,2,1,3,5]));
console.log(minToFront([4,2,1,-1,3,5]));
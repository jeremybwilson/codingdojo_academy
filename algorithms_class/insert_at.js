// InsertAt
// Given an array, index, and additional value, insert the value into the array at the given index. 
// Do this without using built-in array methods. You can think of PushFront(arr,val) as equivalent to InsertAt(arr,0,val). 

// Using ES6 variable declarations
function insertAt1(array, idx, value) {
  for (let index = array.length; index > idx; index--) {
    array[index] = array[index - 1];
  }
  array[idx] = value;
  return array;
}
console.log(insertAt1([1,2,3,4], 2, 9));


function insertAt2(array){
  // 1) start a loop from the back of the array
  for(var index = array.length - 1; index >= 0; index--){
// 2) on the index we are on, take it's value and 
    // store it to the next index over, index += 1
    array[index + 1] = array[index];
  }
  // 3) decrement loop
  array[0] = 44;
  console.log(array);
  // 4) redefine the array of 0;
}
var array_vals = [1,2,3,4];
console.log(insertAt2(array_vals));


// insertAt- given array, index and value
// insert that value at that index

function insertAt3(array, idx, val){
  for (var index = array.length; index > idx; index--){
    array[index] = array[index - 1]
  }
  array[idx] = val;

  // console.log(array);
  return array;
}
var array_vals = [1,2,3,4,5,6,7,8,9];
console.log(insertAt3(array_vals, 7, 103));
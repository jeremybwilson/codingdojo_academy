// removeAt
// Given an array and an index into the array, remove and 
// return the array value at that index.  Do this without 
// using any built-in array methods except pop(). 
// Think of popFront(arr) as equivalent to removeAt(arr,0). 

// removeAtIndex - given an array and index, 
// remove value at index and return in. 

function removeAtIndex(array, idx){
  var temp = array[idx];

  for (var index = idx; index < array.length - 1;  index++){
    array[index] = array[index + 1];
  }
  // remove the last value of the array
  // array.length = array.length - 1;
  array.pop();
  console.log(array);
  console.log('Array val removed: ' + temp);
  // console.log('Array now contains: ' + array);
  return temp;
}
var array_vals = [0,2,4,6,8,10,20];
removeAtIndex(array_vals, 4);
// console.log(removeAtIndex(array_vals, 4));

var array_vals2 = [6,7,12,15,20,23];
removeAtIndex(array_vals2, 3);
// console.log(removeAtIndex(array_vals2, 3));


// Using ES6 variable declaration
function removeAt(array, idx) {
  let value = array[idx];
  // iterate through the array for each index and shift values
  for (let index = idx; index < array.length - 1; index++) {
    array[index] = array[index + 1];
  }
  // use array.pop to pop value at given index
  array.pop();
  return {
    removedValue: value,
    arrayAfterRemoval: array
  };
}
console.log(removeAt([1,2,3,4], 2));
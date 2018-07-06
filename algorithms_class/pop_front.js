// popFront or removeFront - same concept
// remove and return first value of an array - may use pop

// given an array, remove and return the value at the beginning of the array. 
// do this without using any built-in array methods except pop(). 

function popFront1(array){
  var temp = array[0];
  for(var idx = 0; idx < array.length - 1; idx++){
    array[idx] = array[idx + 1];
  }
  array.pop();
  // console.log(array);
  return array;
}
var array_vals = [4,5,6,7,8,9];
console.log(popFront1(array_vals));
// console.log(array_vals);


// Using ES6 variable declaration
function popFront2(array) {
  for (let idx = 0; idx < array.length - 1; idx++) {
    array[idx] = array[idx + 1];
  }
  array.pop();
  // console.log(array);
  return array;
}
console.log(popFront2([1,2,3,4]));


function removeFront(array){
  // create temp variable and store first value of the array
  var temp = array[0];
  // create a for loop to iterate through array values
  for(var idx = 0; idx < array.length - 1; idx += 1){
    // redefine array by moving values forward one position
    array[idx] = array[idx + 1];
  }
  // redefine the length of the array by removing last index
  // array.length = array.length - 1;
  array.pop();
  console.log(array);
}
array_vals = [12,14,16,18,20];
removeFront(array_vals);
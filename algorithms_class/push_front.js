// PushFront
// Given an array and an additional value, insert this value at the beginning of the array. 
// Do this without using any built-in array methods. PushFront(arr,val)

function pushFront(array, value) {
  for (let index = array.length; index > 0; index--) {
    array[index] = array[index - 1]; // array[index] = array.length -> 4
    // array[4] = array[4 - 1] -> array[3]
    // array[3] = array[3 - 1] -> array[2]
    // array[2] = array[2 - 1] -> array[1]
    // array[1] = array[1 - 1] -> array[0]
    // console.log(array[index]);
  }
  array[0] = value;
  return array;
}
console.log(pushFront([1,2,3,4], 9));


function pushFront1(array){
  // 1) start a loop from the back of the array
  for(var index = array.length - 1; index >= 0; index--){
    // 2) on the index we are on, take it's value and 
    // store it to the next index over, index += 1
    array[index + 1] = array[index];
  }
  // 3) decrement loop
  // 4) manually define the array index of 0 to 44
  array[0] = 44;
  // console.log(array);
  return array;
  // 5) redefine the array of 0;
}
var array_vals = [1,2,3,4,6,10,20];
console.log(pushFront1(array_vals));


// pushFront2 - put a value at the front of an array
function pushFront2(array, val){
  var new_array = [val];
  for (var index = 0; index < array.length; index++){
    new_array[index + 1] = array[index];
  }
  return new_array;
}
var array_vals = [1,3,4,5,6,7,9];
console.log(pushFront2(array_vals, 10));
function pushFront(array){
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
var array_vals = [1,2,3,4,6,10,20];
pushFront(array_vals);


// pushFront - put a value at the front of an array
function pushFront(array, val){
  var new_array=[val];
  for (var index = 0; index < array.length; index++){
    new_array[index + 1] = array[index];
  }
  return new_array;
}
var array_vals = [1,3,4,5,6,7,9];
pushFront(array_vals, 10);
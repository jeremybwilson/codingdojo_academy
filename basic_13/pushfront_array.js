// Insert a given value at the beginning of the given 
// ...array, without using any built-in array methods.
// [1,2,3,4] 9 => [9,1,2,3,4]

function pushFront(arr, value){
  var newArray = [value];
  // iterate through the array
  for (var index = 0; i < arr.length; index++){
    newArray[index + 1] = arr[index];
  }
  return newArray;
}
var results = pushFront([1,2,3,4], 9);
console.log(results);
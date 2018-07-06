function shiftValues1(array){
  var temp = array[0];
  console.log("Original array values are: " + array);
  // iterate through the array
  for(var i = 0; i < array.length; i++){
    // shift the array index forward one
    array[i] = array[i + 1];
  }
  // set the final value of the array to 0
  array[array.length - 1] = 0;
  // return the array
  return array;
}
console.log("Updated array values are: " + shiftValues1([1,2,3]));



// practice for speed
function shiftValues2(array){
  console.log("Original array values are: " + array);
  // set the temp var to the 1st value/index of the array - arr[0]
  var temp = array[0];
  // iterate through the array
  for(var idx = 0; idx < array.length - 1; idx++){
    // assign the current position to the next position
    array[idx] = array[idx + 1];
  }
  array[array.length - 1] = 0;
  return array;
  // console.log(arr);
  // console.log(temp);
}
console.log("Updated array values are: " + shiftValues2([1,2,3]));
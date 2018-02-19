function shiftValues(arr){
  var temp = arr[0];
  console.log(arr);
  // iterate through the array
  for(var i = 0; i < arr.length; i++){
    // shift the array index forward one
    arr[i] = arr[i + 1];
  }
  // set the final value of the array to 0
  arr[arr.length - 1] = 0;
  // return the array
  return arr;
}
console.log(shiftValues([1,2,3]));



// practice for speed
function shiftValues(arr){
  console.log("Original array values are: " + arr);
  // set the temp var to the 1st value/index of the array - arr[0]
  var temp = arr[0];
  // iterate through the array
  for(var idx = 0; idx < arr.length - 1; idx++){
    // assign the current position to the next position
    arr[idx] = arr[idx + 1];
  }
  arr[arr.length - 1] = 0;
  return arr;
  // console.log(arr);
  // console.log(temp);
}
console.log("Updated array values are: " + shiftValues([1,2,3]));
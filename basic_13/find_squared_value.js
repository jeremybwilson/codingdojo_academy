// print value of original product squared by itself
function squareVal(arr){
  for(var i = 0; i < arr.length; i++){
    arr[i] = arr[i] * arr[i];
  }
  // return the array values
  return arr;
}
squareVal([1,5,10,6,4,-2]);


// practice for speed
function squareValues(arr){
  // iterate through the array
  for(var i = 0; i < arr.length; i++){
    // square the array values
    arr[i] = arr[i] * arr[i];
  }
  // return the array
  return arr;
}
console.log(squareValues([2,4,5,6,8]));
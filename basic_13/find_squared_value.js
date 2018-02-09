// print value of original product squared by itself
function squareVal(arr){
  for(var i = 0; i < arr.length; i++){
    arr[i] = arr[i] * arr[i];
  }
  // return the array values
  return arr;
}
squareVal([1,5,10,6,4,-2]);
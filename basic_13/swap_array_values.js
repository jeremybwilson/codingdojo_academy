function swap(arr){
  // your code goes here
  // set the temp var to the 1st value/index of the array - arr[0]
  var temp = arr[0];  // temp = 1
  // now update the arr[0] index to arr length minus 1
  arr[0] = arr[arr.length - 1]; // arr[0] = -2
  // now switch (reset) arr[3] to the value of the temp var
  arr[arr.length - 1] = temp;
  // now return the array
  return arr;
}
console.log(swap([1,5,10,-2]));


// write a function that swaps the first and last values of a given array, 
// minimum length of 2 values.
function swapValues(array){
  debugger;  // debugger command for stepping through code in Chrome
  // set the temp variable to the first value of the given array
  var temp = array[0];
  // now updated the array[0] value to array[array.length - 1]
  array[0] = array[array.length - 1];
  // now switch (reset) array[array.length - 1] to the value of the temp var
  array[array.length - 1] = temp;
  // return the new array
  return array;
}
console.log(swapValues([-2,4,6,10]));
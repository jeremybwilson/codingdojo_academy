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
function printSum0to255() {
  var arr = [];
  var sum = 0;
  // iterate through the values 0 to 255
  for(var i = 0; i < 256; i++) {
    // push each new value of the array
    arr.push(i);
    // add the next value of the array to the sum
    sum += i; 
    // console log the sum value, array value
    console.log(arr[i] + ", " + sum);
  }
  // return the array 
  return arr;
}
console.log(printSum0to255());
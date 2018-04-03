function printSum0to255() {
  var array = [];
  var sum = 0;
  // iterate through the values 0 to 255
  for(var index = 0; index < 256; index += 1) {
    // push each new value of the array
    array.push(index);
    // add the next value of the array to the sum
    sum += index; 
    // console log the sum value, array value
    console.log(array[index] + ", " + sum);
  }
}
printSum0to255();
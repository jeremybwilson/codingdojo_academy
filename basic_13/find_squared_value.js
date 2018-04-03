// print value of original product squared by itself
function squareValues(array){
  // iterate throught the values of the array
  for(var index = 0; index < array.length; index += 1){
    array[index] = array[index] * array[index];
  }
  // return the array values
  return array;
}
var array_vals = [2,4,6,10,12];
console.log("Here are the array values squared: " + squareValues(array_vals));


// practice for speed
function squareValues(array){
  // iterate through the array
  for(var i = 0; i < array.length; i++){
    // square the array values
    array[i] = array[i] * array[i];
  }
  // return the array
  return array;
}
var array_vals = [2,4,6,10,12];
console.log(squareValues(array_vals));
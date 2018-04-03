// don't need to declare array variable here to
// .. console log values below
// var array = [-3,3,5,7];

function findMax(array){
  var max = array[0]; // something
  // loop through all the values of the array
  for(var index = 1; index < array.length; index += 1){
    if (max < array[index]) {
      // assign the array index to the max variable
      max = array[index]
    }
  }
  return max;
}
console.log(findMax([-3,3,5,7,12,23]));
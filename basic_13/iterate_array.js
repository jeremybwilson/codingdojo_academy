// write a function to iterate and print out an array
function iterArray(array) {
  var array = [];
  // iterate through the array
  for(var index = 1; index < 256; index += 1){
    array.push(index);
  }
  return array;
}
console.log(iterArray());
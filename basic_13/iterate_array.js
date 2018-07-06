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

function returnNegatives(array){
  var array = [];
  for(var i = 0; i < 51; i++){
    if(i % 2 !== 0){
      array.push(i);
    }
  }
  return array;
}
console.log(returnNegatives());

function swapNegativesWithString(array){
  // iterate through the array values
  for(var index = 0; index < array.length; index += 1){
    if(array_values[index] < 0){
      array[index] = 'Dojo';
    }
  }
  // return the new array
  return array;
}
var array_values = [1,5,10,-2];
console.log(swapNegativesWithString(array_values));

function swapNegativesWithString2(array){
  for(var i = 0; i < array.length; i++){
    if(array[i] < 0){
      array[i] = 'Dojo';
    }
  }
  return array;
}
console.log(swapNegativesWithString2([1,5,10,-2]));
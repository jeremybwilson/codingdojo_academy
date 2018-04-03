function swapNegativesWithString(array){
  // iterate through the array values
  for(var index = 0; index < array.length; index += 1){
    if(arr[index] < 0){
      arr[index] = 'Dojo';
    }
  }
  // return the new array
  return array;
}
var array_values = [1,5,10,-2];
console.log(swapNegativesWithString(array_values));

function swapNegativesWithString(arr){
  for(var i = 0; i < arr.length; i++){
    if(arr[i] < 0){
      arr[i] = 'Dojo';
    }
  }
  return arr;
}
console.log(swapNegativesWithString([1,5,10,-2]));
function numToStr(arr){
  // iterate through the array values
  for(var i = 0; i < arr.length; i++){
    // if the array index (value) is less than zero, then 
    if(arr[i] < 0){
      // set/change the array index value to 'Dojo'
      arr[i] = "Dojo";
    }
  }
  // return the array
  return arr;
}
// console.log(numToStr([-1,-3,2,5]));


function numberToString(array){
  for(var i = 0; i < array.length; i++){
    // if the array value is less than zero
    if(array[i] < 0){
      // then assign the array index the value of the string
      array[i] = "Dojo";
    }
  }
  // return the array
  return array;
}
console.log(numberToString([-3,2,5]));
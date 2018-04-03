// find all the odd numbers in an array from 0 to 255
function oddNumbers() {
  // set empty array variable
  var array = [];
  // loop through set value of 0 - 255
  // for(var i = 1; i < arr.length; i++){
  for(var index = 1; index < 256; index += 1){
    // find odd values using modulo
    if(index % 2 !== 0){
      array.push(index);
    }
  }
  // return the complete array
  return array;
}
console.log(oddNumbers());
// console.log("These are the odd values: " + oddNumbers());



function printOddNumbers(arr){
  // set empty array variable
  var array = [];
  for(var index = 0; index < arr.length; index += 1){
    if(index % 2 === 1){
      array.push(index);
      // console.log(index);
    }
  }
  return array;  // return the array values
}
var array_vals = [1,2,3,4,5,6,7,8,9,10];
console.log(printOddNumbers(array_vals));
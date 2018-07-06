// find all the odd numbers in an array from 0 to 255
function oddNumbers() {
  // set empty array variable
  var oddValsArray = [];
  // loop through set value of 0 - 255
  // for(var i = 1; i < arr.length; i++){
  for(var i = 1; i < 49; i++){
    // find odd values using modulo
    if(i % 2 !== 0){
      oddValsArray.push(i);  // push negative values into new aray
    }
  }
  return oddValsArray;  // return the new array
}
// console.log(oddNumbers());

console.log("These are the odd values: " + oddNumbers());

function findOddNumbers(arr){
  // set an empty array variable
  var oddValsArray = [];
  for(var i = 0; i < arr.length; i++){
    if(arr[i] % 2 !== 0){
      // find odd values using modulo
      oddValsArray.push(arr[i]);  // push negative values into new array
    }
  }
  return oddValsArray;  // return the new array 
}
var array_vals = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
console.log("These are the odd values: " + findOddNumbers(array_vals));

var array_vals2 = [1,2,4,5,6,7,9,10,21,22,25,66,69,71,90,99];
console.log("These are the odd values: " + findOddNumbers(array_vals2));

var array_vals3 = [1,2,3,4,5,7,9,10,11,13,18,22,55,58,61,69,90,99];
console.log("These are the odd values: " + findOddNumbers(array_vals3));

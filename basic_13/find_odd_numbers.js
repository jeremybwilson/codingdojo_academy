function oddNumbers() {
  // set empty array variable
  var array = [];
  // loop through set value of 0 - 255
  // for(var i = 1; i < arr.length; i++){
  for(var i = 1; i < 256; i++){
    // find odd values using modulo
    if(i % 2 !== 0){
      array.push(i);
    }
  }
  // return the complete array
  return array;
}
oddNumbers();


function printOddNumbers(arr){
  var arr = [];
  for(var i = 0; i < arr.length; i++){
    if(i % 2 === 1){
      arr.push(i);
    }
  }
  return arr;
}
console.log(printOddNumbers([1,-2,3,-4,5,-10]));

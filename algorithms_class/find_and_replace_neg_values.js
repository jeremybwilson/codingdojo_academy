const testArray = [1, -3, 5, -5, 7, 10, -10, 12];

const findAndReplaceNegVals = (array) => {
  // declare placeholder array variable
  let newArray = [];
  // iterate through the array
  for(let i = 0; i < array.length; i++){
    // find the negative values
    if(array[i] < 0){
      array[i] = 'replaced';
    }
    // push the values into the new array
    newArray.push(array[i]);
  }
  return newArray
}
console.log(findAndReplaceNegVals(testArray));
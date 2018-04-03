// create and array with all odd integers between 0 and 255
function findNegatives(array){
  // declare and empty negatives array variable
  var negatives = [];
  for(var index = 0; index < array.length; index += 1){
    if(array[index] < 0){
      // push the negative array values to the array
      negatives.push(array[index]);
    }
  }
  // console.log(negatives);
  // return the negative array values
  return negatives;
}
console.log("The negative values here are: " + findNegatives([1,-2,3,-4,-5,-10,12]));
// provided an array, return a new array with min, max, and average
function findMinMaxAverage(array){
  let min = array[0];
  let max = array[0];
  let sum = 0;
  for(let i = 0; i < array.length; i++){
    if(array[i] > max){
      max = array[i];
    }
    if(array[i] < min){
      min = array[i];
    }
    sum += array[i];
  }
  let avg = sum / array.length;
  let newArray = [min, max, avg];
  return newArray;
}
var array_vals = [2,3,4,5,7,9,10,15,20,30];
console.log(findMinMaxAverage(array_vals, 7));
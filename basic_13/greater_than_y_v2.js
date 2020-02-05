// provided an array, return a new array with values greater than Y
// as well as the total count of those values

function greaterThanY(array, Y){
  // create empty var for count
  let count = 0;
  for(let i = 0; i < array.length; i++){
    if(array[i] > Y){
      count++;
    }
  }
  return count;
}
var array_vals = [2,3,4,5,7,9,10,15,20,30];
console.log('Array values greater than Y: ' + greaterThanY(array_vals, 7));
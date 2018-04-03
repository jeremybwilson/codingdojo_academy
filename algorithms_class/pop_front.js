// popFront - remove and return first value of an array
// may use pop
function popFront(array){
  var popped=array[0];
  for(var index = 0; index < array.length-1; index++){
    array[index] = array[index+1];
  }
  array.pop();
  return popped;
}
var array_vals = [1,3,4,5,6,7,9];
popFront(array_vals);
console.log(array_vals);
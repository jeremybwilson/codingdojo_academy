// Increment the Seconds - Given an array of numbers arr, add 1 to every second element, specifically those whose index is odd (arr[1], [3], [5], etc).  
// Afterward. console.log each array value and return arr.
function incrementTheSeconds(array){
  let count = 0;
  // iterate through the array values
  for(var i = 0; i < array.length; i++){
    if(i % 2 !== 0){
      array[i] += 1;
    }
    console.log(array[i]);
  }
  return array;
}
console.log(incrementTheSeconds([1,3,5,7,9,11,13])); 
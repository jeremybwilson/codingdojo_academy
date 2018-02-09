function iterArr(arr) {
  var total = 0;
  for(var i = 0; i < arr.length; i++){
    total = total + arr[i];
  }
  return total;
}

// iterArr([0]);
// iterArr([1,2,5]);
// iterArr([-5,2,5,12]);

console.log(iterArr([0]));
console.log(iterArr([1,2,5]));
console.log(iterArr([-5,2,5,12]));
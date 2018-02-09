function iterArr(arr) {
  var total = 0;
  for(var i = 0; i < arr.length; i++){
    total = total + arr[i];
  }
  return total;
}

console.log(iterArr([0]));
console.log(iterArr([1,2,5]));
console.log(iterArr([-5,2,5,12]));
function findAverage(array){
  var total = 0;
  for(var index = 0; index < array.length; index += 1){
    // average = (average[i] / average.length) * average.length;
    total = total + array[index];
  }
  return total / array.length;
}
console.log("Here is the average of the array: " + findAverage([1,3,5,7,20]));
console.log("Here is the average of the array: " + findAverage([2,4,6,10,12,16]));
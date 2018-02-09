function findAvg(arr) {
  var total = 0;
  for(var i = 0; i < arr.length; i++){
    // average = (average[i] / average.length) * average.length;
    total = total + arr[i];
  }
  return total / arr.length
}

findAvg([1,3,5,7,20]);

function findMinMaxAvg(arr){
  var min = arr[0]; // min
  var max = arr[0]; // max
  var sum = arr[0]; // sum

  for(var i = 1; i < arr.length; i++){
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    sum = sum + arr[i];
  }

  var avg = sum / arr.length;  // declaring avg variable for later arrnew variable
  var arrnew = [max, min, avg]; // output results into this new array
  return arrnew;
}
findMinMaxAvg([1,5,10,-2]);
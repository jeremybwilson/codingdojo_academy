function findMinMaxAvg(arr){
  // declare placeholder variables for min, max, sum
  var min = arr[0]; // min
  var max = arr[0]; // max
  var sum = arr[0]; // sum

  // iterate through the array values
  for(var i = 1; i < arr.length; i++){
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    sum = sum + arr[i];
  }

  // declaring avg variable for
  // ...doing the math for average
  var avg = sum / arr.length;
  // declaring a new array variable for 
  // ... new array values [min, max, avg]
  var arrnew = [max, min, avg]; 
  // output results into this new array
  return arrnew;
}
// findMinMaxAvg([2,4,5,7,9,10]);

function find_min_max_avg(array){
  var min = array[0];
  var max = array[0];
  var total = array[0];

  for(var i = 1; i < array.length; i++){
    if(array[i] > max){
      max = array[i];
    }
    if(array[i] < min){
      min = array[i];
    }
    total = total + array[i];
  }
  var avg = total / array.length;
  var array_new = [max, min, avg]
  return array_new;
}
console.log(find_min_max_avg([2,4,5,7,9,10]));
console.log(find_min_max_avg([2,4,6,8,10]));
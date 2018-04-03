// sum all the even numbers between 0 and 1000
function get_sum_odd_numbers(){
  var sum = 0;
  for(var index = 0; index < 5001; index += 1){
    // determine if index value is odd
    if(index % 2 !== 0){
      sum += index;
    }
  }
  // return the sum
  return sum;
}
get_sum_odd_numbers();
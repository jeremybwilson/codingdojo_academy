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
// get_sum_odd_numbers();

function printSumOdds(){
  let sum = 0;
  for(let i = 1; i < 5001; i++){
    if(i % 2 !== 0){
      sum += i;
    }
  }
  // return the sum
  return sum;
}
console.log(printSumOdds());
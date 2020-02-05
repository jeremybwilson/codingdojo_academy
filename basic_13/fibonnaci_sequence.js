// Fabulous Fibonacci
// Expected output => 0,1,1,2,3,5,8,13,21

function fibonnacci(num){
  // set variables a and b
  // set a to b and b to 1
  let a = 0;
  let b = 1;
  // loop while num >= 0 
  while(num > 0){
    // set sum to a+b
    let sum = a + b;
    // set a to b
    a = b;
    // set b to sum
    b = sum;
    // decrement num
    num--;
  }
  // return
  return a;
}
console.log(fibonnacci(0));
console.log(fibonnacci(1));
console.log(fibonnacci(2));
console.log(fibonnacci(3));
console.log(fibonnacci(4));
console.log(fibonnacci(5));
console.log(fibonnacci(6));
console.log(fibonnacci(7));
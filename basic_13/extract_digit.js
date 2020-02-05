// Extract digit

function extractDigit(num, digitNum){
  return Math.trunc((Math.abs(num) / Math.pow(10, digitNum)) % 10);
}
console.log(extractDigit(-1234, 1));

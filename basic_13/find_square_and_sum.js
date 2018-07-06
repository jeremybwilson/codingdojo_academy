// Find the square of two separate values and add them together
function squareValues(number1, number2){
  // your code here
  const multiplyNum1 = number1 * number1;
  const multiplyNum2 = number2 * number2;
  // add two squared vals for sum
  const squareNumber = multiplyNum1 + multiplyNum2;
  return squareNumber;
}
console.log(squareValues(0,0));
console.log(squareValues(3,100));
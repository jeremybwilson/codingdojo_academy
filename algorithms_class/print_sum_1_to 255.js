const printSum1To255 = () => {
  // declare sum var
  let sum = 0;
  for(i = 1; i < 256; i++){
    // add to the sum the next value through each iteration
    sum += i;
    // console.log(sum);
  }
  return sum;
}

console.log(printSum1To255());
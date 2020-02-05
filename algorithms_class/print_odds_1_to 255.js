const printOddNums = () => {
  // iterate through the numbers 1 to 255
  for(let i = 1; i < 256; i++){
    // determine if the number iterated through is odd
    if(i % 2 !== 0) {
      console.log(i);
    }
  }
};

// console.log(printOddNums());
printOddNums();
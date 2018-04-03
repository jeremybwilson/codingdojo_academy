function fizz_buzz(){
  for(var index = 1; index < 101; index += 1){
    if(index % 15 === 0){
      console.log("FizzBuzz");
    }
    else if(index % 3 === 0){
      console.log("Fizz");
    }
    else if(index % 5 === 0){
      console.log("Buzz");
    }
    else {
      console.log(index);
    }
  }
}
fizz_buzz();

// IIFE version of above
(function fizz_buzz(){
  for(var index = 1; index < 101; index += 1){
    if(index % 15 === 0){
      console.log("FizzBuzz");
    }
    else if(index % 3 === 0){
      console.log("Fizz");
    }
    else if(index % 5 === 0){
      console.log("Buzz");
    }
    else {
      console.log(index);
    }
  }
})();
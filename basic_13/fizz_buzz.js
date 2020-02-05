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
// fizz_buzz();

// IIFE version of above
(function fizzBuzz(){
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

// FizzBuzz with a while loop
function fizzBuzzWhileLoop(){
  var i = 1;
  while ( i <= 100 ) {
    var fizzBuzz = '';
    if (i % 15 === 0) {
      fizzBuzz = 'FizzBuzz';
    }
    else if (i % 3 === 0) {
      fizzBuzz = 'Fizz';
    }
    else if (i % 5 === 0) {
      fizzBuzz = 'Buzz';
    }
    else {
      fizzBuzz = null;
    }
    console.log(fizzBuzz || i);
    i++;
  }
}
fizzBuzzWhileLoop();
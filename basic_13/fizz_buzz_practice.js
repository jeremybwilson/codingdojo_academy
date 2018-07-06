function fizz_buzz(){
  for(var i = 1; i < 101; i++){
    if(i % 15 === 0){
      console.log('Fizz Buzz');
    }
    else if(i % 5 === 0){
      console.log('buzz');
    }
    else if(i % 3 === 0){
      console.log('fizz');
    }
    else {
      console.log(i);
    }
  }
}
// fizz_buzz();

function fizz_buzz_while_loop(){
  let i = 1;
  while(i <= 100){
    let fizzBuzz = "";

    if(i % 15 === 0){
      fizzBuzz = "FizzBuzz";
    } else if(i % 3 === 0){
      fizzBuzz = "Fizz";
    }
    else if(i % 5 === 0){
      fizzBuzz = "Buzz";
    }
    else {
      fizzBuzz = null;
    }
    console.log(fizzBuzz || i);
    i++
  }
}
fizz_buzz_while_loop();
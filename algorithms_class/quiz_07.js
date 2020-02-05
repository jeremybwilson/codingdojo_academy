msg = 'codingdojo';
for(var x = 1; x < msg.length - 2; x++){
  // var x = 1; 1 < 10 - 2 => 1 < 8
  // var x = 2; 2 < 10 - 2 => 2 < 8
  // var x = 3; 3 < 10 - 2 => 3 < 8
  // var x = 4; 4 < 10 - 2 => 4 < 8
  // var x = 5; 5 < 10 - 2 => 5 < 8
  // var x = 6; 6 < 10 - 2 => 6 < 8
  // var x = 7; 7 < 10 - 2 => 7 < 8
  // var x = 8; 8 < 10 - 2 => 8 !< 8
  if(msg.length == 4){
    for(var i = 2; i < 7; i++){
      console.log(i);
    }
  }
  else {
    debugger
    for(var i = msg.length; i > (msg.length - 1); i--){
      // var i = 10; 10 > (10 - 1); => 9  => 10 > 9
      // var i = 9; 9 > (10 - 1); => 9    => 9 > 9
      console.log(i);
    }
  }
}

function sum_odd(){
   var sum = 0;
   //your code here
   for(var i = 9; i < 132; i++){
       if(i % 2 !== 0){
           sum += i;
       }
   }
   return sum; 
}
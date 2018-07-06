// Replace the first character in a given string
let str = 'abc123';
function loopThruString(){
  // declare an empty str var
  let str2 = '';

  // loop through string
  for(var i = 0; i < str.length; i++){
    // if char is equal to a, switch it to z
    if(str[i] == 'a'){
      str2 += 'z';
    } else {
      str2 += str[i];
    }
  }
    // log each character
    return str2
}
// console.log('The resulting string is:', loopThruString(str));
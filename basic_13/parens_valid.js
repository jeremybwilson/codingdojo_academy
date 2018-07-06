// create a function determine true or false on valid parentheses
function parensValid(str){
  // set an empty counter variable to hold count
  let  counter = 0;
  // for loop to iterate through the string
  for(var i = 0; i < str.length; i++){
    // determine if the parens are valid
    if(str[i] == "("){
      counter++;
    } else if(str[i] == ")"){
      counter--;
    }
    if(counter < 0){
      return false;
    }
  }
  if(counter != 0){
    return false;
  }
  return true;
}
let results = "'()',')('";
console.log(parensValid(results));
console.log(parensValid("())("));
console.log(parensValid("(())"));
console.log(parensValid("()()"));
console.log(parensValid("(()))("));
console.log(parensValid("(a)("));
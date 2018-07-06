// create a function to remove blanks
function removeBlanks(str){
  // declare an empty str variable to hold rebuilt str later
  let newStr = "";
  
  for(var i = 0; i < str.length; i++){
    if(str[i] != " "){
      newStr += str[i];
    }
  }
  // return the result via newStr variable
  return newStr;
}
let strWithBlanks = "Hello World";
console.log(removeBlanks(strWithBlanks));
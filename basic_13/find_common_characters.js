// Given two strings, find the number of common characters between them
  // find the number of common characters
  // return the common characters
function commonCharacterCount(string1, string2){

  // declare variable to hold common characters
  const commonCharacters = [];

  // split two strings up into unique arrays
  const string1Vals = string1.split("");
  const string2Vals = string2.split("");

  console.log(string1Vals);
  console.log(string2Vals);

  // for(var i = 0; i < array.length; i++){

  // }
  return commonCharacters;
}
// console.log(commonCharacterCount('aabcc', 'adcaa'));
// console.log(commonCharacterCount('zzzz', 'zzzzzzz'));
// console.log(commonCharacterCount('zzzz', 'zzzzzzz'));
// console.log(commonCharacterCount('abca', 'xyzbac'));
// console.log(commonCharacterCount('a', 'b'));
// console.log(commonCharacterCount('a', 'aaaa'));

var countCommonChars = function(str1, str2) {
    var map = {};
    return Array.prototype.some.call(str1, function(c) {
        if( !map[c] && str2.indexOf(c) >= 0 ) { //character c not checked and in str2
            return true;
        }
        map[c] = true;
    });
}
// console.log(countCommonChars('aabcc', 'adcaa'));
// console.log(countCommonChars('zzzz', 'zzzzzzz'));
// console.log(countCommonChars('zzzz', 'zzzzzzz'));
// console.log(countCommonChars('abca', 'xyzbac'));
// console.log(countCommonChars('a', 'b'));
// console.log(countCommonChars('a', 'aaaa'));


function anythingInCommon(stra, strb){
  if(strb.length < stra.length){
    return anythingInCommon(strb, stra)
  }
  for (var i = 0, len = stra.length; i < len; i++) {
    if(strb.indexOf(stra[i]) != -1){
      return true;
    }
  }
  return false;
}
// console.log(anythingInCommon('aabcc', 'adcaa'));
// console.log(anythingInCommon('zzzz', 'zzzzzzz'));
// console.log(anythingInCommon('zzzz', 'zzzzzzz'));
// console.log(anythingInCommon('abca', 'xyzbac'));
// console.log(anythingInCommon('a', 'b'));
// console.log(anythingInCommon('a', 'aaaa'));

function isMatching(string1, string2)
{
  return new RegExp("\\b(" + string1.match(/\w+/g).join('|') + ")\\b", "gi").test(string2);
}
console.log(isMatching("in", "pin")); // false
console.log(isMatching("Everything is beautiful, in its own way", "Every little thing she does is magic")); // true
console.log(isMatching("Hello World", "world is beautiful")); // true
console.log(isMatching('a', 'b'));
console.log(isMatching('a', 'a'));
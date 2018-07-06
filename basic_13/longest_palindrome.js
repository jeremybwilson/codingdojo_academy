function isPalindrome(str){
  if(!str.length){
    return false;
  } else { // odd 
    var middle = Math.floor(str.length / 2);
    for(var i = 0; i = middle; i++){
      if(str[i] !== str[str.length - 1 - i]){
        return false;
      }
    }
    return true;
  }
}

console.log(isPalindrome(""));
// console.log(isPalindrome("a"));
// console.log(isPalindrome("aba"));
// console.log(isPalindrome("abba"));
// console.log(isPalindrome("abaa"));

// Find the longest palindrome
// longestStr => 't'
// tempStr => 'te'

function longestPalindrome(str){
  var tempStr = "";
  var longestStr = str[0];
  for(var outer = 0; outer < str.length; outer++){
    tempStr = str[outer];
    for(var inner = outer + 1; inner < str.length; inner++){
      tempStr += str[inner];
      console.log("outer: " + outer + " inner: " + inner);
      console.log(tempStr);
      console.log(longestPalindrome(tempStr));
      if(isPalindrome(tempStr) && longestPalindrome.length < tempStr.length ) {
        longestStr = tempStr;
      }
    }

  }
}
console.log(longestPalindrome("testaatcde"));
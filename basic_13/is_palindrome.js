// Find the palindrome

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
console.log(isPalindrome("a"));
console.log(isPalindrome("aba"));
console.log(isPalindrome("abba"));
console.log(isPalindrome("abaa"));
const reverseAString = (string) => {
  // Use the split() method to return the string into a new array
	let changeOrder = string.split("");
  // Use the reverse() method to change the order of every item in the array
	stringReversed = changeOrder.reverse();
	
  // Use the join() method in order to convert the array into a String
	stringReversed = stringReversed.join("");
	
	return stringReversed
}

// console.log(reverseAString("jeremywilson.com"));

const reverseAString2 = (string) => {
  // let changeOrder = string.split('');
  
  // reversedString = changeOrder.reverse('');
  
  // reversedString = reversedString.join('');
  // console.log(reversedString);
  
  let reversedString = '';
    
  for(i = string.length - 1; i >= 0; i--){
    // console.log(string.length);
    reversedString += string[i];
  }
  return reversedString;
}

console.log(reverseAString2("bobdobalina"));

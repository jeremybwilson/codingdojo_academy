// start with the biggest coin,
// take out as many as possible,
// go to the next biggest coin,
// repeat until no change is left

function generateCoinChange(cents){
  const coins = [25,10,5,1];
  let result = [];
  for(let i = 0; i < coins.length; i++){
    let currentNumber = Math.floor(cents / coins[i]);
    result.push(currentNumber);
    // cents -=currentNumber * coins[i];
    cents %= coins[i];
  }
  return result;
}
console.log(generateCoinChange(94));
console.log(generateCoinChange(97));
console.log(generateCoinChange(5108));
function beautifulArray3(arr, m){
  let start = 0;
  let totalCount = 0;
  let oddCount = 0;
  while(start < arr.length){
    for(let i = start; i < arr.length; i++){
      console.log('arr[i] = ', arr[i]);
      if(arr[i] % 2 != 0){
          oddCount++;
      }
      console.log('oddcount', oddCount);
      if(oddCount == m){
          totalCount++;
      }
      console.log('totalcount', totalCount)
    }
    oddCount = 0;
    start++;
  }
  console.log('totalCount', totalCount);
}

beautifulArray3([1, 5, 2, 4, 6], 1)
// result: 5
// function sum(arr, n) {
// if (n <= 0) {
//     return 0;
//   } else {
//       return sum(arr, n - 1) + arr[n - 1];
//   }
// }
// console.log(sum([1,2,4,6,7],4));

// console.log 1 to 10 in order ################
// function countup(n) {
//   if (n > 1) {
//     return [];
//   } else {
//     const countArray = countup(n-1);
//     countArray.push(n);
//     return countArray;
//   }
// }
// console.log(countup(10));


// console.log 1 to 10 in unorder ################
// function countdown(n){
//   if (n < 1){
//     return [];
//   }else{
//     var countArry = countdown(n-1);
//     countArry.unshift(n);
//     return countArry;
//   }
// }
// console.log(countdown(10));

// without useing loop use range ################################
function rangeOfNumbers(startNum, endNum) {
  if (endNum-startNum===0){
    return [startNum];
  }else{
    var data = rangeOfNumbers(startNum, endNum-1);
    data.push(endNum);
    return data
  }
};
console.log(rangeOfNumbers(0,16));

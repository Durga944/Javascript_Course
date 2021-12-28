// function getSum(num1, num2) { // exmpale of normal function
//     var total = num1 + num2;
//     return total;
// }
// console.log(getSum(7,8))

// // Function Expressions ( Anonymous function )
// var getSum = function(num1, num2) {
//     var total = num1 + num2;
//     return total;
// };
// console.log(getSum(5,8))


// 1.Define an Anonymous function and call it by taking two arguments to whether they are equal or not?
// var equal= function(name1,name2){
//     return name1==name2
// }
// console.log(equal("sandhya","bauddha"));//confuson




/*Self-Invoking Functions ( Immediately invoked function expression)
You have to add parentheses around the function to indicate that it is a function expression:*/
// (function () {
// var x = "Hello!! Nayak";  // I will invoke myself
// console.log(x);
// })();

// 1.Define an Self invoking function and call it by taking two arguments to whether they are  equal or not?
// (function(num1,num2){
//     var value = num1===num2;
//     console.log(value)
// })(5,7); //
   
   
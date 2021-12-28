// Write a Python program to combine two dictionary adding values for common keys
// var d1 = {'a': 100, 'b': 200, 'c':300};
// var d2 = {'a': 300, 'b': 200, 'd':400};
// var dic = {}
// for (i in d1){
//     if(i in dic){
//         dic[i]+=d1[i]
//     }else{
//         dic[i]=d1[i]
//     }
// }
// for (j in d2){
//     if(j in dic){
//         dic[j]+=d2[j]
//     }else{
//         dic[j]=d2[j]  
//     }
// }
// console.log(dic)


// Write a Python script to generate and print a dictionary that contains a number (between 1 and n) in the form (x, x*x).
// var readline = require("readline-sync");
// var num = readline.questionInt("enter your number:-");
// var dic = {}
// for (var i = 1; i<=num; i++){
//     dic[i]=i*i
// }
// console.log(dic)


// Write a program to print count a substring in a Main string.
var subString = "is";
var mainString ="My name is kumar, and my friend’s name is Dhamu";
var value = mainString.split(" ");
var count = 0;
var dic = {};
for (var i = 0; i < value.length; i++ ){
    if (value[i]===subString){
        count=count+1
        dic[subString]=count
    }
}
console.log(dic);

// var obj = {name:"sandhya",sname:"bauddha",age:20}
// var dic = {}
// for (i in obj){
//     dic[obj[i]]=i
// }
// console.log(dic)

//  prime with user
// var readline = require("readline-sync");
// var num = readline.questionInt("enter your number:--");
// var count = 0
// for (var i = 1; i <= num;i++){
//     if (num % i===0){
//         count+=1
//     }
// }if (count===2){
//     console.log(`${num} prime`)
// }else{
//     console.log(`${num} not prime`)
// }


//  prime number with user (jitna user number dena utna prime print hoga) 
// var readline = require("readline-sync");
// var num = readline.questionInt("enter your number:--");
// var count1 = 0
// var i=0
// while (count1<=num){
//     var count = 0;
//     var j=1
//     while (j<=i){
//         if (i%j===0){
//             count++
//             j++
            
//         }j++
//     }if (count===2){
//         console.log(`${i} prime`)
//         count1++
//         j++
        
//     }i++

// }

// prime position 

var readline = require("readline-sync");
var num = readline.questionInt("enter your number:--");
var count1 = 0
var i=0
while (count1<num){
    var count = 0;
    var j=1
    while (j<=i){
        if (i%j===0){
            count++
            
        }j++
    }if (count===2){
        console.log(`${i} prime`)
        count1++
          
    }i++

}




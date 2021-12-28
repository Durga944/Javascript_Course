// let fruits = ['Apple', 'Banana']
 // fruits.pop()
// console.log (fruits)



// let fruits = ['Apple', 'Banana', 'orange']
 // fruits.unshift('sandhya')
 // console.log(fruits)



// let fruits = ['Apple', 'Banana', 'Orange']
// let position = fruits.indexOf('Apple')
// console.log(position)


// console.log(fruits.indexOf('Apple'));
// how to use splice()  method an array it will take three perameter (start,deletecount,additem)
// let fruits = ['Apple', 'Banana', 'Orange',"kjhskjhfd","kjhsdflkewahjfgreag","lkjhgfds"]
// fruits.splice(3, 1)
// console.log(fruits)



//  from saral question 
// (1)
// let fruits = ['Apple', 'Banana', 'Orange',"kjhskjhfd","kjhsdflkewahjfgreag","lkjhgfds"]
// for (var i = 0; i<fruits.length;i++){
//     // console.log(i+1)
// }
// console.log(i)

// (2)
// var numbers =[50, 40, 23, 70, 56, 12, 5, 10, 7];
// var count1 = 0;
// var count2 = 0;
// for (var i = 0;i<numbers.length;i++){
//     if (numbers[i]<20){
//         count1++
//     }if(numbers[i]>40){
//         count2++
//     }
// }
// console.log(`${count1} ${count2}`)

// (3)
// var numbers =[50, 40, 23, 70, 56, 12, 5, 10, 7];
// var firstMax = 0 
// var secondMax = numbers[0]
// for (var i = 0; i < numbers.length;i++){ 
//     if(secondMax<numbers[i]){
//         secondMax=numbers[i]
//     }
// }   

// console.log(secondMax);
// console.log(firstMax);

// (4)
// places=["delhi", "gujrat", "rajasthan", "punjab", "kerala"] 
// for (var i = places.length-1; i >=0;i--){
//     console.log(places[i])
// }

// (5)
console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]


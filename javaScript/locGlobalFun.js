// var out = "T-Shirt";

// function myOutfit() {
//   // Only change code below this line
//   var outerWear = "sweater";
//   console.log(outerWear);
// // Only change code above this line
//   return outerWear;
// }

// var vlaue = myOutfit();
// console.log(out);


// ##############################
// // function timesFive(num){
// //     return num*5;
  
// // }
// // var value = timesFive(5);
// // console.log(value)

// ########################
// var sum = 0;
// function addThree() {
//   sum = sum + 3;
// }
// Only change code below this line
// function addFive(){
//   sum = sum + 5
//   return undefined;

// }
// Only change code above this line
// a = addThree();
// b = addFive();
// console.log(a)
// console.log(b)
// console.log(sum)

// ##################################
function nextInLine(arr, item) {
    // Only change code below this line
        arr.push(item);
        
        return arr.shift();
    // Only change code above this line
    
  
}
  
  // Setup
var testArr = [1,2,3,4,5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

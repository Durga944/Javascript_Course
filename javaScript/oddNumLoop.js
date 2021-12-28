// Iterate Odd Numbers With a For Loop ###############
// var myArray = [];
// for (var i=1; i<10;i+=2){
//   myArray.push(i);
// }
// console.log(myArray);


// Iterate Odd Numbers With a For Loop ###########################
// var myArray = [];
// for (var i=9;i>=1;i-=2){
//   myArray.push(i)
//   console.log(myArray)
// }


// Iterate Through an Array with a For LoopPassed ###################

// var myArr = [ 2, 3, 4, 5, 6];
// var total = 0;
// for (var i=0;i<myArr.length;i++){
//   total = total + myArr[i]
// }
// console.log(total);


function multiplyAll(arr) {
    var product = 1;
    for (var i=0;i<arr.length;i++){
      for (var j=0; j<arr[i].length;j++){
        product=product*arr[i][j];
        }
    }
    return product
}
  
console.log(multiplyAll([[1,2],[3,4],[5,6,7]]));

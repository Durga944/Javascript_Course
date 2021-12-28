var array = [10,20,30,40,50];
 var newArray = array.map(function(value,index,arr){
    // value++
    return arr;
    
});
console.log(array) //[10,20,30,40,50]
console.log(newArray); //[10,20,30,40,50]

// var array = [
//         {price:100,product:"mobile"},
//         {price:200,product:"laptop"},
//         {price:300,product:"mac"},
//         {price:400,product:"pc"}
//     ];
// var newArray = array.map((value) => {
//     return value.product;

// });
// console.log(newArray)
// console.log(array)
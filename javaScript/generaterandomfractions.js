
//  It will take any random decimal number every time diffrent (but it cant take intger nuber)#############################

// function randomFraction() {
//     var a = Math.random();
  
//     return a;
// }console.lograndomFraction()



// It will take any nuber (0 to 9)#########################
// function randomWholeNum() {
  
//     return Math.floor(Math.random()*10);
// }console.log(randomWholeNum());


//  this will work like range ( 0 to 9) so it will give number nut not a zero ############################
function randomRange(myMin, myMax) {
    var value = Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
    return value;
}console.log(randomRange(0, 9));

function makeFunc() {
    var a = 0;
    function displayName() {
        return a = a + 1;
    }
    return displayName;
  }
  
let myFunc = makeFunc();
console.log(myFunc());
console.log(myFunc());
console.log(myFunc());
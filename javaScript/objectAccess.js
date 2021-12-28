// for access properties from the object with variable ############
// var testObj = {
//     12: "Namath",
//     16: "Montana",
//     19: "Unitas"
// };
// var playerNumber= 16;
// var player = testObj[16]; 
// console.log(player);


// for adding new properties in object with (dot notation) and (btraket notation) ################
// var myDog = {
//     "name": "Happy Coder",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["freeCodeCamp Campers"]
// };
// myDog["bark"] = "Woof"
// console.log(myDog)

// (2)
// var myDog = {
//     "name": "Happy Coder",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["freeCodeCamp Campers"]
// };
// myDog.bark = "Woof"
// console.log(myDog)


// updateing properties in object with (dot notation) and (btraket notation) ############
// var myDog = {
//         "name": "Happy Coder",
//         "legs": 4,
//         "tails": 1,
//         "friends": ["freeCodeCamp Campers"]
//     };
//     // myDog["name"] = "Good Coder" //(braket notation)
//     myDog.name = "Good Coder" //(dot notation)
//     console.log(myDog)

// (2)
// var myHome = {
//     "name": "Mannat",
//     "location":"Mumbai",
//     "Colour":"black",
//     "owner":"sharukh khan",
//     "neighbours": ["everything!"]
//     };
    
    
//     myHome.name="my Villa";
//     console.log(myHome)



// delete properties in object with (dot notation) and (btraket notation) ############
// var myDog = {
//     "name": "Happy Coder",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["freeCodeCamp Campers"],
//     "bark": "woof"
// };
// delete myDog.tails;
// console.log(myDog)

// (2)

// var myHome = {
//     "name": "Mannat",
//     "location":"Mumbai",
//     "Colour":"black",
//     "owner":"sharukh khan",
//     "neighbours": ["everything!"],
//     "isGood":true
//   };
  
//   delete myHome["isGood"];
//   console.log(myHome)
 
// for access properties from the object with variable#############################
// var vegetables ={
//     veg1:"potato",
//     veg2:"brinjal",
//     veg3:"bottle gourd"
// }
  
// var vegetable1= vegetables.veg1;
// var vegetable2= vegetables.veg2;
// var vegetable3= vegetables.veg3;


// console.log(vegetable1);
// console.log(vegetable2);
// console.log(vegetable3);

// Check property is there or not in object (it will return true value) ##############
// var myDetails={
//     "name":"kumar",
//     "age":24
// }
// console.log(myDetails.hasOwnProperty("name"));

// LooLoop over an object

var person={"name":"gouri","surname":"maity","age":37}
 
for (person_details in person){
console.log(person_details+ "= "+person[person_details]);
}

const campus={"camp_name":"Bangalore_campus","establish":2016,"election":"three_months"}
for(let eachKey in campus){
  console.log(campus[eachKey])
}








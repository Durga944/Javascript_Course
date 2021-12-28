//  (for in loop) will work  for indexing  or element of  array 
// var cars = ["Maruti", "Mercedes", "BMW"];
// for (let i in cars){
// console.log(i);
// }


// ################
// var person={"name":"gouri","surname":"maity","age":37}
 
// for (person_details in person){
// console.log(person_details+ " = " +person[person_details]);
// }

// ##############
// const campus = {"camp_name":"Bangalore_campus","establish":2016,"election":"three_months"}
// for(let eachKey in campus){
//   console.log(campus[eachKey])
// }


	
// let Navgurukul = ['Pune', 'Bangalore', 'Sarjapur'];
 
 
// // cmpKey are the property keys
// for (let cmpKey in Navgurukul) {
//  console.log(cmpKey);
// }
// console.log("------------------")
// // cmpValue are the property values
// for (let cmpValue of Navgurukul) {
//  console.log(cmpValue)
// }

const campus={"camp_name":"Bangalore_campus","establish":2016,"election":"three_months"}
for(let pro in campus){
 console.log(`${pro} = ${campus[pro]}`)
    // console.log(pro)
}
console.log("#########################")
for(let pro of campus){
    console.log(pro)
}
   


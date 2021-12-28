//  by useing nested if-else 
var year = 1400;
if (year % 4==0){
    if(year % 400==0 || year % 100!=0){
        console.log(year,"is leapyear");
    }else{
        console.log(year," not leapyear");
    }
}


//  by useing is-else 
var year = 1400;
if (year % 4==0 && year % 100!=0 || year % 400 ==0 ){
    console.log(year,"is leapyear");
}else{
    console.log(year,"is not leapyear");
}
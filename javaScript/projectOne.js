

var yourName= prompt("Please enter your substring");
var stor = document.links
for (var i = 0; i < stor.length;i++){
    if (stor[i].text===yourName){
        console.log(stor[i])
    }
}
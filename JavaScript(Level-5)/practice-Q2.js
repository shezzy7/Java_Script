//Q2
//create a function to roll a dice & always display the value of dice(1-6)
function dice(){
    let rol=Math.floor(Math.random()*6)+1;
    console.log(rol);
}
let start=prompt("Enter roll or stop");
while(start!="stop"){
    if(start=="roll"){
    dice();
    start=prompt("Enter roll or stop");
    }
    else{
        start=prompt("Wrong choice!!roll or stop");
    }
}
console.log("Stopped");

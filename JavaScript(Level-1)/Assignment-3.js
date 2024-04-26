//WAP to input mont tries number and print the names of months according to this number -> 1:"January,February,March" & 2:"April,May,June" & 3:"July,August,September" & 4:"October,November,December" 
let month=prompt("Enter month number : ");
switch(month){
    case 1:
        console.log("January,February,March");
        break;
    case 2:
        console.log("April,May,June");
        break;
    case 3:
        console.log("July,August,September");
        break;
    case 4:
        console.log("October,November,December");
        break;
    default:
        console.log("Invalid Month");
        break;   
}
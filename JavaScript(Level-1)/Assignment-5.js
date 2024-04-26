//WAP to program to find greatest b\w three number 
let a=prompt("Enter a");
let b=prompt("Enter b");
let c=prompt("enter c");
if(a>b && a>c){
    console.log("Largest number is = "+a);
}
else if(b>c){
    console.log("Largest number is = "+b);
}
else{
    console.log("largest number is = "+c);
}
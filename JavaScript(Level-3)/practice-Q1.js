//print all odd numbers from 1 to 15
console.log("Odd number between 1-15 are")
for(let i=1;i<=15;i++){
    if(i%2!=0){
        console.log(i);
    }
}

console.log("second method is ");
for(let i=1;i<=15;i+=2){
    console.log(i);
}
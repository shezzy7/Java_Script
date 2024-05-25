//print all even numbers between 2-14
console.log("Evevn numbers between 2 to 14 are");
for(let i=1;i<=15;i++){
    //as we know remainder of any even number by 2 is equall 0
    if(i%2==0){
        console.log(i);
    }
}

// second method is 
console.log("by second method")
for(let i=2;i<=14;i+=2){
    console.log(i);
}
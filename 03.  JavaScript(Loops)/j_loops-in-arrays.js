let fruit=["mango","orange","apple","banana","strawberry"];
console.log("List of all  fruits is given beolow");
for(let i=0; i<fruit.length; i++){
    console.log(i, fruit[i]);
}

console.log("List of fruits present at odd index are given below");
for(let i=0;i<fruit.length;i++){
    if(i%2==1){
        console.log(i,fruit[i]);
    }
}

console.log("List of fruits present at even index are given below");
for(let i=0;i<fruit.length;i++){
    if(i%2==0){
        console.log(i,fruit[i]);
    }
}

console.log("List of all fruits in reverse order is given below");
for(let i=fruit.length-1; i>=0;i--){
    console.log(i,fruit[i]);
}
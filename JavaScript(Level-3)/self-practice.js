let arr=[1,2,3,4,5,6,1,2,3,4,5,6,7,8,7,9,8,7];
console.log(`array = ${arr}`);
let n=prompt("Enter number to del its occuerance");
for(let i=0;i<arr.length;i++){
    if(arr[i]==n){
        arr.splice(i,1);
    }
}
console.log(`now array is:${arr}`);

for(let i=1;i<=20;i++){
    if(i%2!=0){
        console.log(i);
    }
}

let todo=[];
let x=prompt("Enter your choice");
while(x!="quit"){
    if(x=="add"){
        let task=prompt("Enter what you want to add");
        todo.push(task);
        console.log(`${task} added`);
    }
    else if(x=="del"){
        let task=prompt("Enter what you want to remove from list");
        if(todo.includes(task)){
            todo.splice(todo.indexOf(task),1);
            console.log(`${task} removed`);
        }
        else{
            console.log("The given element is not present in the list");
        }
    }
    else if(x=="list"){
        console.log(`your todo list is = ${todo}`);
    }
    else{
        console.log("invalid command");
    }
    x=prompt("Select your choice");


}
console.log("Quited");
//find number of elements present in the string
let str="7895856";
let count=0;
let sum=0;
for(st of str){
    count++;
}
console.log(`strinng contains ${count} numbers with sum=${sum}`);

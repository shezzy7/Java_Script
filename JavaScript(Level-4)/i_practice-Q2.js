//create a random integer b\w 1-10

//method1
let num=Math.random();
num=num*10;
num=Math.floor(num);
console.log(`num1 : ${num}`);
//numbers created by this way will be b\w 0-9 but we want b\w 1-10 so we will add 1 in every integars
num=num+1;
console.log(`num2 : ${num}`);
//Method2
// let num2=Math.floor(Math.random()*10)+1;
// console.log(`num3 : ${num2}`);

console.log(Math.floor(Math.random()*10)+1);

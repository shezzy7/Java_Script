const arr=[1,2,3,4];
//Whenever we declare a variable as constant then we can't change its value later.
//Bu in arrays if  we declared an array as constant then we can add or remove any element from  array but cannot makes it equal another array.
arr.push(5);
console.log(arr);
arr.unshift(0);
console.log(arr);

let brr=[2,3,6,9];
console.log(`brr before: ${brr}`);
brr=[10,11,12,13];// it will not give us error bcz it is not a constant
console.log(`brr after : ${brr}`);

//arr=[1,2,3,4];//it will give us error bcz it is a constant array

const n=512;
console.log(`n= ${n}`);
// n++;//error
console.log(`n= ${n}`);
//n=512+5;//it will give us error 
let m = 612;
console.log(`m= ${m}`);
m++;//this will not give error bcz this var is not const

console.log(`m= ${m}`);

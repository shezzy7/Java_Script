//sort: we can sort arrays in ascending order. And arrays are sorted alphabatically.
let array=["shahzad","goodo","kashif","wasii","sohail"];
console.log(`original array: ${array}`);
console.log(`sorted array : ${array.sort()}`);
//sorting is muteable . it makes changes to the originals array;
console.log(`original array becomes: ${array}`);
//if we sort array pf numbers then it will first convert them to aplhabets and then
//sort them, its is the reason that numbers are not sorted in a way we want them
let num=[15,60,20,64,105,78,100];
console.log(`original array of number : ${num}`);
let num2=num.sort();
console.log(`sorted array: ${num2}`);
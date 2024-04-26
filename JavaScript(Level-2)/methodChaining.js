// making a chain of different methods
let str1="          some changes are painful but necessary!";
console.log(`original sting:${str1}`);
//in simple way to trim its white spaces and convert to upper case we do it followingly
let str2=str1.trim();
str2=str2.toUpperCase();
console.log(`after trim and to upper case:${str2}`);

//but by method chaining we will it as follow
let str3=str1.trim().toUpperCase();
console.log(`after chaining :${str3}`);
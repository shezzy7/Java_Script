//Question no.1
//WAP to get first n elements of array
let arr=[0,1,2,3,4,5,6,7,8,9];
console.log(`original array : ${arr}`);
let n=5;
let brr=arr.slice(0,n);
console.log(`first ${n} elements are : ${brr}`);

//Question no.2
//WAP to get last n elements of array
let m=3;
let crr=arr.slice(-m);
console.log(`Last ${m} elements are : ${crr}`);

//Question no.3
// Write a JavaScript program to check whether a string is blank or not.
let stri="";
if(!stri){
    console.log("String is empty");
}
else {
    console.log("String is not empty");
}

//Question no.4
// Write a JavaScript program to test whether the character at the given (character)index is in lower case
let index=3;
let charArr = ['A','b','C','d','E'];
let char = charArr.slice(index,index-1);
if(char==char.toLowerCase()){
    console.log("Charactor is in lower case");
}
else{
    console.log("Charactor is not in lower case");
}
//Question no.5
let str1="    Dhondh ujre huwe logon mn wafa k moti   ";
console.log(`string before trim:${str1}`);
let str2=str1.trim();
console.log(`trimed string is:${str2}`);

//Question no.6
let array=[5,11,23,64,99,-1];
let item=20;
let verify=array.includes(item);
console.log(verify);
if(verify){
    console.log("element is present in the array");
}
else{
    console.log('element is not present in the array');
}

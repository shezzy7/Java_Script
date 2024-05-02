//slice: copy a portion of array.This method just eturn a portion original array and does make changes to  original array.
// syntax-> arrayNAme.slice(value);
let str1=[2,4,6,8];
let str2=[10,12,14,16];
console.log(`str1 at start : ${str1}`);
console.log(`str2 at start : ${str2}`);
let str3=str1.slice(2);//it will copy element from index 2 to last index
console.log(`str3 is : ${str3}`);

let str4=str2.slice(1,2);//it will copy elemnt from inde 1 to index 2-1
console.log(`str4 is: ${str4}`);

let str5=str2.slice();//it will copy whole array
console.log(`str5 is: ${str5}`);

let str6=str1.slice(-2);//it will copy elemnt from index (str1.length-2) to last
console.log(`str6 is: ${str6}`);

//we will see that does effected our original arrays 
console.log(`str1 at end : ${str1}`);
console.log(`str2 at end : ${str2}`);

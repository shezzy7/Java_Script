//slice: copy a portion of array
// syntax-> arrayNAme.slice(value);
let str1=[2,4,6,8];
let str2=[10,12,14,16];

let str3=str1.slice(2);//it will copy element from index 2 to last index
console.log(`str3 is : ${str3}`);

let str4=str2.slice(1,2);//it will copy elemnt from inde 1 to index 2-1
console.log(`str4 is: ${str4}`);

let str5=str2.slice();//it will copy whole array
console.log(`str5 is: ${str5}`);

let str6=str1.slice(-2);//it will copy elemnt from index (str1.length-2) to last
console.log(`str6 is: ${str6}`);


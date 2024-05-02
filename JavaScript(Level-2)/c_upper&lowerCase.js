//for converting a whole string into lower or upper case
//syntax->      stringName.toUpperCase();  ||   stringName.toLowerCase();
let str1="Will this Journey Ever end!";
let str2=str1.toUpperCase();
let str3=str1.toLowerCase();
console.log(`Original string: ${str1}`);
console.log(`String in upper case : ${str2}`);
console.log(`string in lower case: ${str3}`);
//in this also keep in mind that toUpperCase or toLowerCase both methods does not change the original string they just return the value of original string after converting it.The original string will remain same.
console.log(`Original string: ${str1}`);

//trim method is used to trim the spaces at the beginning and at the last of any string

const log = require("surge/lib/middleware/log");

// syntax->     stringName.trim();
let str="               Hello this is a string with white spaces at beginning and at last   ";
console.log(str);//before trim
let str2=str.trim();//we will store the triming file into another variable
console.log(str2);
//keep in mind that strings are immuteable so we can not make changes to any string.
//so trim method does not changes the original string,it just returns the value of string after triming it and we can store it another variable.but the original string will remain same
console.log(str);
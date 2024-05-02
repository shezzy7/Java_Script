//slice method returns a part of the string as a new string
// syntax ->    stringName.slice(starting index,ending index+1);
//if we pass a starting index and a ending index+1 then it will print the string b\w these indexes
let str1="be happy in your own condition, bcz comparison takes away peace of life!";
let str2=str1.slice(3,8);//8th index itself will not be included (8-1) 
console.log(str2);
//if we pass just a starting index then it will start printing or return from that index to last index
let str3=str1.slice(32);
console.log(str3);
// if we pass any negative value then it will minus it from total length of string and set it as its starting value
let str4=str1.slice(-14);
console.log(str4);
console.log(str1.slice(str1.length-14));
console.log(str1.slice(32,str1.length));
//Original string will remain same as does not make changes to original string ,it just returns the origignal value
//concatination: it  is  process of combining 2 arrays
//syntax-> firstArray.concat(secondArray);
let str1=["punjab","sindh","balochistan","KPK"];
let str2=["lahore","karachi","Quetta","Peshawar"];
let str3=str1.concat(str2);
console.log(str3);
let str4=str2.concat(str1);
console.log(str4);

//reverse: this method reverse an array
//note: the original is reversed even it is stored in new array 
//syntax-> arrayName.reverse();
console.log(`before reverse : ${str1}`);
str1.reverse();
console.log(`after reverse: ${str1}`);
let str5=str2.reverse();//reverse of str2 is stored in str5 but str2 in itself is also reversed

console.log(`str5: ${str5}`);
console.log(`str2: ${str2}`);
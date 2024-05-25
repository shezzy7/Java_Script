let str="haji muhammad shahid is a big player of volleyball, he is teacher of kashiii taounsa";
console.log(str);
//replace method is used to replace any world of string with anyother word
//syntax->  stringName.replace("values-from-string","value which will replace it")
let str2=str.replace("haji","jam");
console.log(str2);
console.log(str.replace("muhammad shahid","muhammad waseem"));
//also keep in mind that the original string will remain same.
//and another thing that replacing value will replace only first occurence of the given value mean if we want to replace the word 'a' with 'b' then we will write
console.log(str.replace('a','b'));//then this will not replace all 'a' in the string it will just replace first 'a' of string with b


//repeat method is used to repeat any string
// syntax->  stringName.repeat(any number);
let str4="Shezzy"
let str3=str.repeat(3);//ShezzyShezzyShezzy
console.log(str3);
console.log(str2.repeat(3));
//this will also not change the original string

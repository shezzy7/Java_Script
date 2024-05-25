//we can copy arrays in another array using this spread method and the benefitss will be this that this will create a new array any changes maded in this array later will not effect array which is present already.
let arr = [2,4,6,8,10];
let brr = [...arr];
console.log(brr);
brr.push(5);
console.log(arr);//this will remain same 
let crr = arr;
console.log(crr);
crr.push(5);
console.log(arr);//now arr will be changed as 5 is added in crr which pointing same memory location in the memory.

//lets do this for a string 
let ch = [..."Hello"];//these characters of hello will be stored individually like this will be stored like  ["H","e","l","l","o"]
console.log(ch);

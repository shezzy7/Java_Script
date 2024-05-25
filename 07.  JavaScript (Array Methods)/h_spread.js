//Spread expands an iterable into multiple values. Here iterable means data structure which can be iterated using lopps like arrays,strings etc.So this method spreads each valuue indvidually.
//for using this we use three dots '...' with any value to be spreaded.
let str = "shezzyjam";
console.log(str);
//lets do this using spread method
console.log(...str);
let arr = [1,2,3,4,5,6,7,8,9];
console.log(arr);
console.log(...arr);
//we can also use this in different methods.
//like
console.log(Math.min(...arr));
//we can't write Math.min(arr); bcz this will get array asa whole but when we use spread method then this will take each value individually


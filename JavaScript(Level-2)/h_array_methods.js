//Like strigns arrays in js contains many methods.Some imprtant are these.

//push : add an element at theend of array
//syntax -> arrayName.push(element);
let arr=["jam","shahzad","hussain"];
console.log(arr);
arr.push("mustafai");
console.log(arr);

//pop  : remove an element at the end of array and also it return the it.Mean if waant to store the last element of an array and also we want to remove it from array then we can do this with pop method
//syntax-> arrayName.pop();
//lets remove last element of arr and also store it in a new variable
let last = arr.pop();
//but if we don't want to store in we can also write simple   arr.pop();

console.log(last)
console.log(arr);


console.log("Unshift and shift area starting");
// unshift : add an element at the beginning
//syntax-> arrayName.unshift(element);
let brr = ["jam","shahzad","huusain"];
console.log(brr);
brr.unshift("Muhammad");
console.log(brr);
brr.unshift("ibneAdam");
console.log(brr);

//shift: removes an element from the beginning and like pop method this method also return the first element after emoving 
//syntax-> arrayName.shift();
brr.shift();
console.log(brr);
let first=brr.shift();
console.log(first);
console.log(brr);
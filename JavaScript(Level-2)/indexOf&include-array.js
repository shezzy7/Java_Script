//it returns the index of a value in array 
//syntex arrayName.indexOf(value);
let arr=["jam","shahzad","hussain"];
console.log(arr.indexOf("shahzad"));
//if the value is present in the array then -1 will be returned 
console.log(arr.indexOf("Mustafai"));


//include:it is used to verify whether the element is present in array or not
//if element is pesent then true will be returned else false wil be returned
//syntax-> stringName.include(value);
console.log(arr.includes("hussain"));
console.log(arr.includes("khan"));
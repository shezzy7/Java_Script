//Q1
//Square and sum the array elements using the arrow function and then find the
// average of the array
let arr = [1,2,3,4,5];
//square
let brr=arr.map((ele)=>{
    return ele*ele;
})
console.log(brr);
//sum
let sum = brr.reduce((s,ele)=>{
    return s+ele;
})
console.log("Sum -> ",sum);
//average
let avg = sum/brr.length;
console.log("average ->",avg);


//Q2
//Create a new array using the map function whose each element is equal to the
// original element plus 5.
let crr = [1,2,3,4,5];
let drr = crr.map((ele)=>{
    return ele+5;
});
console.log(drr);

//Q3
//Create a new array whose elements are in uppercase of words present in the
// original array
let err = ["shezzy","hania","goodo"];
let frr = err.map((ele)=>{
    return ele.toUpperCase();
});
console.log(frr);

//Q4
//Write a function called doubleAndReturnArgs which accepts an array and variable number of arguments. The function should return a new array with the original array values and all of the additional arguments doubled.
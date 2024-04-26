let arr=[1,2,3,4];
let brr=[1,2,3,4];
console.log(`${arr[0]==brr[0]}`);
console.log([1]==[1]);//these number have different addres so it it will return false

let crr=['a','b','c'];
let drr=crr;
console.log(`drr : ${drr}`);
drr.push('d');//element will be aded in both crr and drr ,bcz drr is coppied from crr
                //so it  is a functionality of arrays
console.log(`crr : ${crr}`);
console.log(`drr : ${drr}`); 

crr.push('e');//it will be also added in both crr and drr
console.log(`crr : ${crr}  drr : ${drr}`);

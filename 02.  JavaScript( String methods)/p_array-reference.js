//When ever we talk about references then that means we talking about addresses.
//In javascript whenever a new array is created a new memory locatin us assigned to it.So when we compare array directly then that mean we are comparing addresses and adresses can't be same so we give false in output
let arr=[1,2,3,4];
let brr=[1,2,3,4];
console.log(`${arr[0]==brr[0]}`);//here we are comparing values of 0 index of both arrays as here both arrays conrain 1 at 0 index so true will be returned.
console.log([1]==[1]);//But here we are comparing arrays directly.Even if they have same values in it but their adress are different so false will be returned.

let crr=['a','b','c'];
let drr=crr;//here drr is not copying the elements directly it is copying the adresses of elements in crr.So any change in drr now or crr then it will be also reflected in both as they are pointing to same adress in memory.
console.log(`drr : ${drr}`);
drr.push('d');//element will be aded in both crr and drr ,bcz drr is coppied from crr
     //so it  is a functionality of arrays
console.log(`crr : ${crr}`);
console.log(`drr : ${drr}`); 

crr.push('e');//it will be also added in both crr and drr
console.log(`crr : ${crr}  drr : ${drr}`);

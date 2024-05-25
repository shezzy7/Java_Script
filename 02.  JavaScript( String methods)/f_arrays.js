// Array is linear collection of things
//in js Arrays are muteable,so we can make changes in original array
let arr=[2,4,6,8];
console.log(arr);
console.log(arr[0]);
//unlike cpp,java etc. we can also create array with mixed type of data
let brr=["shezzy",25,25.3];//mixed array
console.log(brr);
//we can also access elements of strings in array .If we want to to get 3rd index of 0th index string 
console.log(`fourth element of 0th index is : ${brr[0][3]}`);
console.log(brr[0][0]);
///for getting length
console.log(`the length of brr is : ${brr.length}`); 

//Arrays are muteable (unnlike string changes made to them will remain )
brr[0]="shahzad";
console.log(brr);
//we can also add any value at any index like
brr[10]="jam";
console.log(brr);
brr[8]="shezzy2";
console.log(brr);
// but the area  b\w these indexes will be occupied by empty spaces(undefined)
for(let i=0;i<brr.length;i++){
    console.log(brr[i]);
}
//check if all number of our array are multiples of 10 r not
let arr = [10,20,30,2,50,60];
let ans = arr.every((el)=>{
    return el%10==0;
});
if(ans){
    console.log("All numbers are multiple of 10");
}
else{
    console.log("All number are not multiples of 10");
}

//finc minnimum element fromm given array
let min = arr.reduce((min,ele)=>{
    if(min>ele){
        return ele;
    }
    return min;
})
console.log("minimum elem in the given array is ->",min);
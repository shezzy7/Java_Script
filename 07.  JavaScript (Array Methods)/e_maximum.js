//lets find a maximum element from given array  using reduce method
let arr = [25,36,42,95,75,122,36,45,54];
let max = arr.reduce(findMax);
function findMax(ac,ele){
    if(ele>ac){
        return ele;
    }
    else{
        return ac;
    }
}
console.log(max);
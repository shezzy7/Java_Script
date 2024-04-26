let arr=[1,2,3,4,5,6,7,8,9];
let n=prompt("enter number first of digits");
let crr=arr.slice(0,n);
console.log(crr);




let x=prompt("Enter number of last digits");
let brr=arr.slice(-x);
console.log(brr);

let ch=prompt("Enter charactor");
if(ch==ch.toUpperCase()){
    console.log("Charactor is in upper case");
}
else {
    console.log("Charactor is in lower case");
}

let frr=[12,1,4,5,6,8,7,12,5,36,95];
let y=prompt("Enter number to check its presence");
for(let i=0;i<frr.length;i++){
    if(frr[i]==y){
        console.log(`Element is present in the array at index ${i}`);
        break;
    }
}

let str4="    i love silence   !   ";
console.log(str4.trim());
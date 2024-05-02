//Question no.1
let arr=[0,1,2,3,4,5,6,7,8,9];
console.log(`original array : ${arr}`);
let n=prompt("Enter no to get first elements: ");
let brr=arr.slice(0,n);
console.log(`first ${n} elements are : ${brr}`);

//Question no.2
let m=prompt("enter no to get last elements: ");
let crr=arr.slice(-m);
console.log(`Last ${m} elements are : ${crr}`);

//Question no.3
let stri=prompt("Enter string: ");
if(stri.length==0){
    console.log("String is empty");
}
else {
    console.log("String is not empty");
}

//Question no.4
let char=prompt("Enter charactor: ");
if(char==char.toLowerCase()){
    console.log("Charactor is in lower case");
}
else{
    console.log("Charactor is not in lower case");
}
//Question no.5
let str1="    Dhondh ujre huwe logon mn wafa k moti   ";
console.log(`string before trim:${str1}`);
let str2=str1.trim();
console.log(`trimed string is:${str2}`);

//Question no.6
let array=["hello",'a',23,64,99,-1];
let item=prompt("enter number to check its prescence: ");
//the input received through is by default taken as string data type so first we will 
//convert it to integar data type
item=parseInt(item);
let verify=array.includes(item);
console.log(verify);
if(verify==true){
    console.log("element is present in the array");
}
else{
    console.log('element is not present in the array');
}

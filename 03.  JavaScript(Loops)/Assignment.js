//Question no.1
    //write a javascript program to remove all occurences of an element in array
let arr1=[1,2,3,4,5,6,7,8,9,5,4,2,3,6,2,1];
console.log(`original array : ${arr1}`);
let num1=prompt("enter number which you want to remoove from list");
for(let i=0;i<arr1.length;i++){
    if(arr1[i]==num1){
        arr1.splice(i,1);
    }
    }
console.log(`Your modified Array is without ${num1} : ${arr1}`);

//Question no.2
    //find how many digits are there in a number 
let num=7856;
for(n of num){
    count++;
}
console.log(`count =${count}`);

//Question no.3
    //find the sum of all digits in a given number


//Question no.4
    //find the the factorial of integar n
let n=prompt("Enter no to find its factorial");
let fact=1;
for(let i=1;i<=n;i++){
    fact=fact*i;
}
console.log(`factorial of ${n} = ${fact}`);

//Question no.5
    //find the largest number in a given array
let arr2=[];
let num2=prompt("From how many number you want to find the largest number");

console.log(`Enter ${num2} numbers<1000`);
for(let i=0;i<num2;i++){
    let num3=prompt(`Enter num${i+1}`);
    arr2.push(num3);
}
console.log(`your entered array is : `);
for(let i=0;i<arr2.length;i++){
    console.log(`iindex ${i} = ${arr2[i]}`);
}
let largNum=arr2[0];
for(let i=0;i<arr2.length;i++){
    if(largNum<arr2[i]){
        largNum=arr2[i];
    }
}
console.log(`largest number in the giver array is: ${largNum}`);
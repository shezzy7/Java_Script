//create a function that returns the sum of number from 1 to n
function getSum(n){
    let sum = 0;
    for(let i=1;i<=n;i++){
        sum=sum+i;
    }
    return sum;
}
console.log(getSum(5));
//it is used in loops for breaking under some specific condition
//suppose we have abilty to print numbers b\w 1-100 and we ask user to tell 
//that till which number you want us to print number and if user enter suppose 56 then 
//we will use break keyword in our loop and when numbers becomes equal to 56 our loop 
//will be breaked
let num=prompt("enter last number: ");
num=parseInt(num);
let i=1;
while(i<=100){
    if(i==num){
        break;
    }
    else{
        console.log(i);
    }
    i++;
}
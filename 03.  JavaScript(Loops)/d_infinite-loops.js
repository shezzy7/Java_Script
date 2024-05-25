//in some condition our loop become infinte and their body will go on executing for infinite time
//in case of infinite loop our browser can get hang so we have to stay away from these things
// some examples of infinte loops are 
//as here our condition will always be true so loop will stop and continue on running
for(let i=1;i<=5;i--){
    console.log(i);
} 

//second
for(let i=1;i>0;i++){
    console.log(i);
}

//third
for(let i=1; ;i++){
    console.log(i);
}
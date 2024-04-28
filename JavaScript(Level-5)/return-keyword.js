// synatx
//      function funcName(parameters){
                            //code
 //                           return value;
//      }

function sum(a,b){
    return a+b;
}
//sum(5,6); this will not print the function in case the return keyword is used
console.log(5,6);
console.log(sum(1,3),4);
let x = sum(5,6);
console.log(x);
//any statement in the function before return key word will be executed 
//but once function reach the return keyword ,then any statement after
//return keyword will not be executed
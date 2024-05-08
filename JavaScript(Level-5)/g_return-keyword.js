// synatx
//      function funcName(parameters){
                            //code
 //                           return value;
//      }

function sum(a,b){
    return a+b;
}
//sum(5,6); this will not print the function in case the return keyword is used
console.log(sum(5,6));
//we can also use this function for adding 3 values like
console.log(sum(1,3),4);
//any statement in the function before return key word will be executed 
//but once function reach the return keyword ,then any statement after
//return keyword in this function will not be executed

//if we simply write 'sum(5,6)'  then this will not print the value bcz we have just call it but give it instruction for printing result .So  for print it we shoulld write in console.log(sum(5,6)) or store it in new variable then print it.
let x = sum(5,6);
console.log(x);
// setTimeout:-This function is used to set a timer on  a function that this function should start executing after this time.Time is given in milli seconds.
//Syntax -> setTimeout(function,timeout)
//This function which are going to write in setTimeout function is known as callback.\
//Callback is such a function that is passed to another function as a parameter. 

console.log("Hi there");
setTimeout(()=>{
    console.log("Shezzy's house");
},4000) //1000 millisecond = 1 second
console.log("Wellocme to ");

//in output we will see that first of all 'Hi there' will be printed and then 'Wellcome to' and after 4seconds 'Shezzy's house' will be printed.Which means that code after setTimeout function does not stop executing.
//setTimeout is used for API calls ,for request/response etc.
//we can also pass name of any already defined function like
function sit(){
    console.log("Sit please!");
}
setTimeout(sit,5000);//we don't need to add paranthesis with function name in setTimeout function we just pass function name and time.

//now our output will be 
    // Hi there
    // Wellcome to
    // Shezzy's house               //after 4s
    // Sit Please!                  //after 5s

//Function Expression :- it is another method of defining any function.
//                      in this method we store a function without name it and
//                      storing it in a variable 
let sum = function(a,b){
    console.log(a+b);
}
//when call this function we use name of variablle we used to store it and pass arguments throu it
sum(5,4);

//so if we want to treat a function as avariable then we store it into a variable 
//for example we create a variable
let greet;
//and want to assign it a value
greet = function()
{
    console.log("Hello");
}
console.log(greet());
//now we want to change its value then
greet = function(){
    console.log("salam");
}
//now greet's value has been changed 
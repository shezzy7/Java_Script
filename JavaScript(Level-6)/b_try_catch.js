//try:- 'try' statement allows to define a block of code to be tesetd for errors while it is being executed.
// catch:-  'catch' statement allows you to define a block of code to be executed if an error occurs in 'try' statement.

//Lets suppose we write a piece of code like
console.log("heloo1");
console.log("heloo1");
console.log("heloo1");
// console.log(a);//when we will run this code then statements above a will be executed but when our code will hit console.log(a); statement then an error will be generated and statements after this line will not be executed.
//So to protect our programm from stoping when it encounters with error statements we use try and catch statements.
//if we are unsure that this statement can give error at some condition then we write this statement in try block.This statement cheks the code if no error found then code will be executed other catch statements code will be executed
console.log("Hello2");
console.log("Hello2");
console.log("Hello2");

//lets try this
console.log("Heloo3");
console.log("Heloo3");
console.log("Heloo3");
try{
    console.log(a);
}
catch{
    console.log("Hello4");
    console.log("Hello4");
    console.log("Hello4");
}

//lets intialoze a 
let a=10;
console.log("Hello5");
console.log("Hello5");
console.log("Hello5");
try{
    console.log(a);//now this try tatements code will be executed bcz this statement don't have any error and catch stattement will be skipped
}
catch{
    console.log("Hello6");
    console.log("Hello6");
    console.log("Hello6");
    console.log("Hello6");
}
//If we see in depth then it is workign as : when 'try' finds an error it sends it as an argument to 'catch' statement and when 'catch' statement receives an error msg as argument it executes code in it
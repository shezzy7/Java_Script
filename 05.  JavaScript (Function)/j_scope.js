//Scope deermines the accessibilities of variables,functions and objects from diferent
//part of the code.
//scope has three catagories
//      1-function scope    2-Block scope     3-Lexical scope
//1-Function scope:-
//                  Variables defined inside the function cannot be accessed outside the function.
//                  If we've created some variables outsude the function of some specific
//                   name then we can also create variables of same name inside the   
//                  function. But in function's inside the variable which is 
//                  declared inside the function will be 
//                  prefered over the outer variable.
//                  We cannot give same name to a variable and function.
//                  And we can also access any variable ,which is declared globally,
//                  inside the function if any variable with the same name is not 
//                  declared inside the function.
let add=55;
function calSum(a,b){
    let add = a+b;//this will not give error and will not store result of a+b in our globale variable sum.
    console.log(`inner add = ${add}`);//12
}
calSum(10,2);
console.log(`outer add is = ${add}`);//55

//2-Block Scope:-
//                  Variables defined inside the block{} cannot be accessed outside
//                  Before 2015 only var was used to declare any variable.But in
                    //   2015 let and const keywords were introduced in javascript and block scope was introduced with them so block scope can be only applied on let and const keywords variables not on var.
                //  the block.
for(let i=0;i<5;i++){
    console.log(i);//this i has block scope and we cannot access this outside the block
    let x=5; //if we want to access this x variables outside our block of for loop then error will be generated 
    var y=10;//but we can access this y variables anywhere in the code as it has global scope and block scoe does not affect it
}
console.log(`y = ${y}`);



//3-Lexical Scope:-
//                  A variable defined outside a function can be accessible inside
//                   another function defined after that variable.opposite is not true.
function outerFun(){
    let x=5;
    let a=6;
    function innerFun(){//we can't call that inner function directly outside the outer function
        let z=10;//we canot access this 'z' in our outer function and also outsude outer function
                    //bcz this  has its function scope
                    //but we can access variables of outer function in this inner function
        console.log(`y=${a}`);
        //but if we define a variable using var keyword inside a function then we can also can't access it outside this function bcz function scope is different from block scope.
        

    }
    innerFun();
}
outerFun();
// innerFun(); ths wil error bcz innerFun has function scope



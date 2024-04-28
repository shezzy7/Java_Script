//Scope deermines the accessibilities of variables,functions and objects from diferent
//part of the code.
//scope hs three types
//      1-function scope    2-Block scope     3-Lexical scope
//1-Function scope:-
//                  Variables defined inside the function cannot be accessed outside the function
//                  If we've created some variables inside a function then we can also
//                  creat variables of same name outsude the function. But in function's
//                  inside the variable which is declared inside the function will be 
//                  prefered over the outer variable.
//                  But we cannot give same name to a variable and function.
//                  And we can also access any variable ,which is declared globally,
//                  inside the function if any variable with the same name is not 
//                  declared inside the function.
let add=55;
function calSum(a,b){
    let add = a+b;
    console.log(`inner add = ${add}`);
}
calSum(10,2);
console.log(`outer add is = ${add}`);

//2-Block Scope:-
//                  Variables defined outside the block{} cannot be accessed outside
//                  the block.
for(let i=0;i<5;i++){
    console.log(i);//this i has block scope and we cannot access this outside the block
}


//3-Lexical Scope:-
//                  A variable defined outside a function can be accessible inside
//                   another defined after that variable declaration.
function outerFun(){
    let x=5;
    let y=6;
    function innerFun(){//we can't call that inner function directly outside the outer function
        let z=10;//we canot access that 'z' in our outer function and also outsude outer function
                    //bcz these have their function scope
        console.log(`y=${y}`);
    }
    innerFun();
}
outerFun();
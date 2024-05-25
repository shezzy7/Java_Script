//In arrow function when we don't have to perform any operation and don't print anything in function and just want to return some value from this function then we can do this as following. Syntax -> const funcName = (parameters) => (value); 
//let supose i want that my arrow function should return the product of two parameters passed through it 
const prdct = (a,b) =>(a*b);//this will return result of a*b.we don't need to write return statement in this.Ans we use paranthesis instead of curly braces.
let ans = prdct(5,6);
console.log(ans);

//We use this property of arrow function when we jsut nedd to return some value from function after performing a simple single line operation on it.And to make our code less bulky.

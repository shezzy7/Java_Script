//Default parameters
//we can also set values of some parameters by default in a function.
//for example if we create a function ans define some parameters in this.And we want  that we will pass value of one parameters each time but the value of second parameters should be setted by default each time.Like
function func(a,b=2){
    return a+b;
}
console.log(func(3));//This 3 will be assigned to a and value of b is already setted 2 by default.So the answer will be 5
//But if we pass values of both parameters then this passing value will overriide the default value
console.log(func(4,6));//This will 10 as this 6 will override 2 of b
//we can also set first parameter default like
function func2(a=2){
    return a+3;
}
console.log(func2());//5
//And also if we pass its value then this passing value will also override it.
console.log(func2(5));//8
//but if there are more then 2 parameters in a function and we make first parameters's value by default ,then
function func3(a=2,b,c){
    return a+b+c;
} 
console.log(func3(5,6));//here we want to pass the value of next two params but in this case 5 will be stored in a and 6 in b and c will remain undefined so result will be a NaN.
//So we should care when are are using default params
//in this case we can avoid this condition by again passing the a's value.like
console.log(func3(2,5,6));//13

//Arrow function:- 

//syntax    const funcName = (arg1,arg2...)=>{ function defination};
//calling       funcName(arg1,arg2...);

const sum = (a,b)=>{
    return a+b;
};
console.log(sum(5,6));
//we can also store it in another variable
let res = sum(5,10);
console.log(res);

//arrow function has a property that if we have only single operator then it can skip paranthesis like
let cube = n =>{
    return n*n*n;
};
console.log(cube(3));

//And if arrow don't have any parameters , then we have to use empty paranthesis else error will be gennerated
const pow = ()=>{
    console.log("Power function called");
};

pow();

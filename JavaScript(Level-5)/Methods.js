//Metods :- Methods are actions that can be performed on an object
const meth = {
    add : function(a,b){
        return a+b;
    },
    sub : function(a,b){
        return a-b;
    },
    mul : function(a,b){
        return a*b;
    }
};
console.log(meth.mul(5,5));
console.log(meth.add(5,5));
console.log(meth.sub(5,5));

//we can also do this by shorthand
let factory = {
    add(a,b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    },
    mul(a,b){
        return a*b;
    }
};
console.log(factory.add(5,5));
//Metods :- Methods are actions that can be performed on an object
//Basically function that are defined in objects are knoown as methods
const meth = {
    add:function(a,b){
        return a+b;
    },
    sub:function(a,b){
        return a-b;
    },
    mul:function(a,b){
        return a*b;
    }

}
console.log(meth.mul(5,6));
console.log(meth.add(5,6));
console.log(meth.sub(5,6));


//we can also do this by shorthand
let calc = {
    add(a,b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    },
    mul(a,b){
        return a*b;
    }

}
console.log(calc.add(5,5));
console.log(calc.mul(5,6));
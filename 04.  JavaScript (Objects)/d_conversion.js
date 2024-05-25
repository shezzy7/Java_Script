//if we define any variable in object literals as a key javascript will change this name as a string
//even we can also give names like null,undefined,true,false,1,2.. these are against the terms of declaring variables but here in object literals these can be created because javaSript convert them to string.Mean if we define a key name then it will be taken as "name".
const literal = {
    1 : "one",
    123 : "OneTwoThree",
    null : 12,
    true : 548,
    undefined : "heloo",
    false :  "trueVar"
};
console.log(literal);
console.log(literal[1])
//in case of keys named numbers will be written in square brackets

console.log(literal.null);
console.log(literal.true);
console.log(literal.undefined);
console.log(literal.false);
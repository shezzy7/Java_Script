//object literals->  these are used to store keyed collection and complex entities
//                    propert=> (key,value)pair
//                      objects are a collection of properties
//syntax->      let variableName={ key:value,key:value,key:value,......key:value};
//Key can be any name as a identifier of a specific value.We can also name ouur keys using integers like we write a key name as 123 
//Value can be any integer/float/boolean or array.
let stu = {
    name:"Shahzad",
    age:21,
    rolNo:221722,
    marks:1034,
    favColor:"Camel",
    123:"One two three"
}
console.log(stu);
//while initialising an object we prefer to intialise it by const key word. By initialiising it with const keyword it does not mean that we can't change its values later but it means that it will occupy the same location in memory even if changes are maded later.
//and we can also store an array in object
const item = {
    price:500,
    disc : 100,
    name : "chocolate",
    colors : ["black","white","orange"]
};
console.log(item);

//we also access specific elements of an array in objject
console.log(item.colors[1]);
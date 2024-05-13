//we can also get all the keys of an object using a method
//syntax    ->  Object.keys(objName);
const obj = {
    name : "Shezzy",
    age : 21,
    marks : 1034,
    profession : "Student"
};
console.log(Object.keys(obj));

let k = Object.keys(obj);
console.log(k);
// this method Object.keys(objName) returns values in the form of array so now k is an array that contains keys in it.So we can iterate on our object using this array k
for(let i=0;i<k.length;i++){
    console.log("Key : ",k[i],", value : ",obj[k[i]]);//we can't use '.' method here instead of [] brackets
}
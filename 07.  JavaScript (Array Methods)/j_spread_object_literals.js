//as we can copy array to another array using spread method,we can also copy object literals using spread method.
//syntax -> let newObj = {...oldObj};
let obj = {
    name : "Gooda",
    age : 21
};
let copyObj = {...obj};
console.log(copyObj);
//if we also want to add some other pairs in our new objec tthen we can also add them separatiing them commas
let copyObj2 = {...obj,email : "shezzy72242@gmail.com",marks : 3.41};
console.log(copyObj2);

//we can also spread array in objects.In this case their indexes will be taken as keys and elements of array will be taken as values respectively
let arr = [10,11,12,13,14,15];
let copyArray={...arr};
console.log(copyArray);

//like this we can also store string in our objects and index of each chaacter will be taken as key and this character will be taken as value for this key respectively.
let copyStr = {..."shezzy"};
console.log(copyStr);
//we can also get values of keys in the object individually 
//we can use two methods for this purpose.
//i-    objectName["keyname"];
//ii-   objectName['keyName'];
//iii   objectName.keyName;
const obj = {
    1:2,
    name : "shezzy",
    age : 21,
    marks : [12,13,14]
};
console.log(obj);
console.log(obj["name"]);//first method
console.log(obj.name)//second method
console.log(obj.age);
console.log(obj['age']);
console.log(obj.marks);
console.log(obj["marks"]);
//we can also access index of arrays in the objects
console.log(obj.marks[0]);
console.log(obj['marks'][0]);

//mostly used syntax is objName.keyName;

//we can also use outer varibles whose value is equall to some key for getting objects values 
//like 
let id = "name";
//so we can use this var id as a key for name
console.log(obj[id]);//this will give the value of name key as its value is equall to 'name'.
//But we can't use it with '.' operator 
//For example if i write obj.id; then it will give error and if i write obj[id];then it work
console.log(obj.id);//undefined
//this will give error every time when we are using outer variable as a key.


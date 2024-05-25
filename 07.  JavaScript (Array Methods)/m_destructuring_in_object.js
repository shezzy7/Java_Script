//like arrays destructuring can also be done on objects
//lets suppose we have an object and we want to store values of soem its keys to some other variables then we can use destructuring fo this purpose.
//But in objects we have to get values of objects using keys as
let obj = {
    name : "shezzy",
    age : 21,
    DOB : 2003
}
let {name , DOB } = obj;
//here we have stored some keys values in other variable but we have used keys of object to get vales and also setted them as variables.If we write any variable other then keyName then we cannot acess it value.If we want to store any keys value then we have to pass key name and then this keys value value will be fetched fronm objects and will be stored in this key which now here taken as variable.
console.log(DOB);
//here we have got name and then DOB which is showing that in objects order doest not matter whether any pair is first or at any place in objects only key name matters.
//nut if we want to give any name to our new variable other then it keys then we do this as
// let {keyName:varName,keyName:varName}=objName;
let {age:old,DOB:birth}=obj;
console.log(old);
//here age keys value is fecthed from objects and stored in old variables and we cannot access this value direcly from age 
// like if we write console.log(age);then this will error

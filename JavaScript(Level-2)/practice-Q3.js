
//splice method()
let start=["january","july","march","auguest"];
console.log(`original array is : ${start}`);
start.splice(0,2,"july","june");
console.log(`array solved by splice method is : ${start}`);

//index of javascript if array is reveresed
let lang=['c','c++','html','javascript','python','java','c#','SQL'];
console.log(`index of javascript before : ${lang.indexOf("javascript")}`);
console.log(`index of javascript after arrays is reversed: ${lang.reverse().indexOf("javascript")}`);
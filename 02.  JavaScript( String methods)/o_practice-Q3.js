
//splice method()
//convert this string from 
        //["january","july","march","auguest"];
            // To
                // ["July","june","march","august"]
                // using splice method
let arr = ["january","july","march","auguest"];
console.log(`original array is : ${arr}`);
arr.splice(0,2,"july","june");
console.log(`array solved by splice method is : ${arr}`);

//index of javascript if array is reveresed
let lang=['c','c++','html','javascript','python','java','c#','SQL'];
console.log(`index of javascript before : ${lang.indexOf("javascript")}`);
console.log(`index of javascript after arrays is reversed: ${lang.reverse().indexOf("javascript")}`);
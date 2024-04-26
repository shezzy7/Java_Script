//convrt the following array 
//start:["january","july","march","auguest"];
        // to
//          end:["july","june","march","auguest"];
let str=["january","july","march","auguest"];
console.log(`start: ${str}`);
str.shift();
str.shift();
str.unshift("june");
str.unshift("july");
console.log(`end: ${str}`);


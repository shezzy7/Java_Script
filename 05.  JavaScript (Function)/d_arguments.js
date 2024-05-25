//Arguments  are the values that we pass to the function while calli  ng it
let name = prompt("Enter name");
let age = prompt("Enter age");

//Parameters are the values that a function receive
//unlike c++ or java we don't need set write type of parameters.
function stuInfo(name,age){
    console.log(`${name} is ${age} years old`);
}
stuInfo(name,age);

//in javascript if we dont pass any argument to a function but also receive it as parametrs then error will not be generated it will just take it as undefined
stuInfo("shezzy");//this will not give error it will just take age as undefined 
//But order also matters.For example if we pass age as argument then it does not mean that age parametrs will get teh value.The first parameter will get the value
stuInfo(25);//this value will be received by name parametr



        //Call Stack
//Call stack is a major concept to understand how functions calling is handeled in our code.The word 'call' refers to simple calling a function at any place in code.'Stack' refers to a data structure which works on LIFO(Last in first out) principle.If we a write a function and then call it at any place ,this call will be stored in our stack and then compiler will check our call stack data structure whenter contains any function to be executed ,if see it will execute this function first and then will move on.Now if inside this function if we call another function then this new functions call be inserted on top of stack ,so as we know stack works on last in first out so as new function is added after our first function so it will stop executing first one and will start executing this new function and after executing this function stack will remove this new function from it and will start executing first one,when this function is executed completely this will be removed from stack and code will start executing other lines.If found other functions then the same process will continue.  

function sayHello(){
    console.log("Hello's inside ");
}

function demo(){
    sayHello();
    console.log("demo's inside");

}

demo();

//In our call stack demo will be added to top as it is empty first,and demo will eb executed inside this demo another function sayHello function will be added to call stack now it will be at top compiler will continuosly check call stack ,as compiler will fincd another function sayHello at the top of call stack it execute this function and code inside sayHello will be executed first after executing it completely our call stack will remove sayHello from it and them will continue executing remaing part of demo function as it is still at the top of call stack after executing it completely ,demo will be removed from our call stack and now call stack is empty and further no functions will be called.This is how call stack works in javascript

        // Visuallizing the call stack

function one(){
    return 1;
}

function two(){
    return one()+one();
}

function three(){
    return two()+one();
}
let ans = three();
console.log(ans);

//Here first of all a varibale will be created and first of all its value will be undefined.Then as we are calling a function three,so it will be added to our call stack and complier will start executing it.Then inside this function our compiler will hit another method two and this will be added to top of our call stack and compiler will start executing two.After enetering into two our compiler will hit another function one and it will be added to call stack and compiler will start executing it and from this function 1 will be returned.As we return from one it will be removed from our call stack and compiler will come back to function two and it will again hit function one and it will be added to our call stack compiler will go to this function one and 1 will be returned from this one function.When we will come out of this one function it will be removed from our call stack.Now we are back in our two function from which 1+1 will be returnd.As we come out of function two it will be removed from our call stack and then complier will hit another function one and it will add this one into our call stack and will start executing it from this one function 1 will returned and we will come out of one function and one will be remmoved from call stack.And now we are back in function namde three now from three 2+1 will be returned and will asinged to ans variable.After coming out of this three method it will be removed from our call stack and now our call stack is empty.Compiler will just print value of ans which is 3 and code will stop executing. 
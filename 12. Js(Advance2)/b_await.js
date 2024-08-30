            //await keyword
//await keyword pauses the execution of its surrounding asynchronous functions(only) until the promise is settled(resolved or rejected).
//for example if we write a function that returns a promise with a setTimeout of 1s and write an async function in which we call that previous function many times that returns a promise.As we have setted a setTimeout of 1s then all the calls will be executed after one second immediately.
function getNum(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve();
        },1000)
    })
} 
async function demo(){
    getNum();
    getNum();
    getNum();
}
//demo();//on sonsole we wil see that three numbers will be printed after 1s at the same time.But if we want that once a promise is setteled then another processing should be done.Mean if we call a function that returns a promise and then we call that function again or write other lines of code and we want that all other code should stop running until our promise is returned.
//For this purpose we use await keyword while calling that function that returns a promise
async function demo2(){
    await getNum();//will be executed after one second
    await getNum();//will be executed after execution of previous call
    await getNum();//will be executed after execution of previous call
    getNum();//will be executed after execution of previous call
}
// demo2();
//Note: we can only write await keyword inside async functions.

//lets chnage color of our h1 heading after each second using await keyword
let h1 = document.querySelector('h1');
function changeColor(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let r = Math.floor(Math.random()*255)+1;
            let g = Math.floor(Math.random()*255)+1;
            let b = Math.floor(Math.random()*255)+1;
            let color = `rgb(${r},${g},${b})`;
            h1.style.color = color;
            console.log(color);
            resolve();
        },1000)
    })
}
async function color(){
    
    
    await changeColor();
    await changeColor();
    await changeColor();
    await changeColor();
    await changeColor();
    await changeColor();
    await changeColor();
} 
color();

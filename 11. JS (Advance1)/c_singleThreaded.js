        //Single threaded
//Programming languages are categorized on two terms 'single threaded' and 'multi threaded'.Single threaded means execute code line by line,perform a single task at one time.Javascript is a single threaded language.It executes its code line by line.
//But there arise a question what if our js code request API for some data and API may delay in sending this data,then if API delays then our javascript code will stop right over there for waiting API to send data and perform other tasks?To overcome this problem we use callbacks.As we know callback is a function that is passed to another function as an argument.We can use setTimeout methods for this.
//lets see another case of js single threaded mechanism.

setTimeout(()=>{
    console.log('Apna college');
},2000);
console.log('Hello...');

//When we see our output it will first print Hello... and then after 2s 'Apna college' will be printed on console.After seeing this a question may arise in our mind that if js see setTimeout method and leave it for two seconds and goes on executing next lines of code,and right after 2s it executes setTineout.Then it means that js alongwith executing next line of code also controlling timer of setTimeout,it means that js is performing two tasks at same time.But we say that it is a single threaded language,then how it is single threaded? The answer to this question is that methods like setTimeout are not handled by js it is handled by our browser.Whenever our js hits a method which contains a timer it gives it to browser and browser counts time as it see that given time has reached it put given callback on callstack of js ,then js start executing this function.
//our browsers are madeup usually by c++ which is a mutli threaded language.

//lets take a overview of what is synchronous and asynchronous
let a = 5;
console.log(a);
let b=10;
console.log(a+b);
//When this code is executed first of all line number 15 will be executed , then 16,17 and at last 18.So code is executing line by line sequntially.Code is running continuosly without any jump to another line/function of code by skiping any line.So this is called synchronous nature.

//let write another piece of code
function aSync(){
    console.log('Asynchronous nature');
}
console.log('calling aSync func');
aSync();
//Here we see as our code will hit line number 26 compiler will jump to line number 23,which shows that our code is not executing continuously in a unsequenced way,/so this nature of code is known as 'asynchronous nature'.
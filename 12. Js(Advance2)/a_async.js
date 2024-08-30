            //async
//There is another method of writing asynchronous function and this is clean and concise.
//syntax-> async function funcName(){ return something} promise will be returned
//when we write keyword 'async' with any function's name then it becomes an asynchronous function and what thing this function will return will be returned in the form of a promise and we can apply methods upon it like then and catch methods.

async function func(){//if we call this function on console a promise will be returned and promiseState will be fulfilled and in result hello! will be given.
    return 'hello!';
}

//But if this async function contians an error in this then we will get promiseState rejected.To add any error in our function we can use a 'throw' method.Lets try this
async function func2(){
    throw 'Error genereted';
    return 'hello';
}
//now when we will call this function this will return a promise with promiseState rejected and in result it will say Error generated.

//lets create an async function and apply some methods on it
async function prom(){
    //throw '404 page not found';
    return 'Pakistan';
}

prom()
.then((result)=>{
    console.log('Promise was resolved, result is : ',result);
})
.catch((error)=>{
    console.log('Promise was rejected , error is ',error);
})

//we can also make our arrow functions as asynchronous functions by writin async keyword with them
let demo = async ()=>{
    return 5;
}
demo();


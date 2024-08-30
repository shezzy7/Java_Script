//We can also get values of resolve and reject as our result and error respectivley
function sayHello(){
    return new Promise((resolve,reject)=>{
        let age = Math.floor(Math.random()*30);
        if(age>=18){
            resolve(`Say Hello age = ${age}`);
        }
        else{
            reject(`ignored,age = ${age}`);
        }
    })
}

sayHello().then((result)=>{//we will pass a parameter in then method which will store value of resolve , we can give any name to this parameter
    console.log(result);
})
.catch((error)=>{//we will pass a parameter in catch method which will store value of reject , we can give any name to this parameter
    console.log(error);
})

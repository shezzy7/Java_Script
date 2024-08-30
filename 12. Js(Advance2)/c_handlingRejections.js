//How will we handle if our function called with await keyword returns a promise which is rejected.And after this call we have write some line of code which we want to execute.If the promise is rejected then the remainig part of code will not execute.So to solve this problem we can use try and catch method
let h1 = document.querySelector('h1');
function changeColor2(color){
    return new Promise((resolve,reject)=>{
        let num = Math.floor(Math.random()*5)+1;
        if(num>3){
            reject('rejected');
        }
        setTimeout(()=>{
            h1.style.color = color;
            
        resolve();
        },1000)
    })
}

async function handle(){
    try{
        await changeColor2('orange');
        await changeColor2('blue');
        await changeColor2('black');
        await changeColor2('green');
    }
    catch{
        console.log('Error generated');
    }
    //so this code below will be called all the times even all promise are resolved or even if any of the promises is rejected.s
    let a = 5;
    console.log('code after changeColor2 calls : ',a+5);
}
handle();
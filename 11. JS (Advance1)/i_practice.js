//lets apply this concept of promises on a callback hell which we created first to understand callback hell.
//here we will be changin colour of our h1 object after each second.
function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color = color;
            resolve(`color changed to ${color}`);
        },delay)
    })
}

changeColor('red',1000)
.then((success)=>{
    console.log(success);
    return changeColor('blue',1000);
})
.then((success)=>{
    console.log(success);
    return changeColor('aqua',1000);
})
.then((success)=>{
    console.log(success);
    return changeColor('brown',1000);
})
.then((success)=>{
    console.log(success);
})
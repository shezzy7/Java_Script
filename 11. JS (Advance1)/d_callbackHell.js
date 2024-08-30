        //callback hell
//Lets try to change color of our h1 heading and after each one second give it some other color.
let h1 = document.querySelector('h1');

// setTimeout(()=>{
//     h1.style.color='red';
// },1000);

// setTimeout(()=>{
//     h1.style.color='yellow';
// },1000);

// setTimeout(()=>{
//     h1.style.color='green';
// },1000);

//When js will execute this code after one second we will only see green color as all the setTimeout methods have time span of one second so browser will get them and as one second passes away it will push all of them on call stack and they will be executed immediately,as green color is at last so this will stay as permanent color of h1.
//To avoid this problem we use different method in which at each time span we can write time increases by 1000 ,like
// setTimeout(()=>{
//     h1.style.color='orange';
// },2000);
// setTimeout(()=>{
//     h1.style.color='aqua';
// },3000)
// setTimeout(()=>{
//     h1.style.color='pink';
// },4000);

//After one second green color will be turned to orange and then after one second it will change to aqua and after one second it will finally chnag to pink colour.

//But this method is also annoying we can imrove it.
function changeColor(color,delay,newColorChange){
    setTimeout(()=>{
        h1.style.color=color;
        
    if(newColorChange) newColorChange();//if newColorChange is paased then execute it .
    },delay)
}

changeColor('red',1000,()=>{
    changeColor('blue',1000,()=>{
        changeColor('white',1000,()=>{
            changeColor('brwon',1000,()=>{
                changeColor('yellow',1000)
            });
        });
    });
});

//This will work efficiently but as we see it is creating a bunch of callbacks which is known as callback hell.It may become sometime complex for us to understand so to avoid from this we use promises,async and await keyword.
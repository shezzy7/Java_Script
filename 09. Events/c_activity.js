//We have to create a heading on page,a button and a diven with some border.Whenever we will click our this button then this should generate a random color value in rgb and this color should be setted as color of heading and background color of div.
let fH3 = document.createElement('h3');
fH3.innerText='Generate a random color';
let btn4 = document.createElement('button');
btn4.innerText='Generate color';
let div2 = document.createElement('div');
div2.innerText='This is your new color';
div2.style.border = '1px solid black';
div2.style.display='flex';
div2.style.justifyContent='center';
 let body = document.querySelector('body');
 body.style.display,justifyContent='flex,center';
 body.append(fH3,btn4,div2);
body.style.textAlign='center';
div2.style.padding='50px';
div2.style.auto='auto';
body.style.flexDirection='column';

btn4.addEventListener('click',function(){
    let colorVal = generateColor();
    fH3.innerText=colorVal;
    div2.style.backgroundColor=colorVal;
});

function generateColor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    let color = `rgb(${red},${green},${blue})`;

    return color;
}



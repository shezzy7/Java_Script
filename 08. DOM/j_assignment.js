        //Asignment

//Q1-Create a new input and button element on the page using javascript only.Set the text in button 'click me'
let input1 = document.createElement('input');
let btn1 = document.createElement('button');
btn1.innerText='Click me';

document.querySelector('body').append(btn1,input1);



//Q2-Add following attributes to the element:
        //i-Change placeholder value of input to 'username'
        //ii-change the id of button to 'btn'
input1.placeholder='username';
btn1.setAttribute('id','btn');

//Q3-. Access the btn using the querySelector and button id. Change the button background color to blue and text color to white.
document.querySelector('#btn').style.color='white';
document.querySelector('#btn').style.backgroundColor='blue';
//lets add a line break between input and btn
let lBreak = document.createElement('br');
btn1.insertAdjacentElement('afterend',lBreak);


//Qs4. Create an hl element on the page and set its text to "DOM Practice" underlined. Change its color to purple.
let fH1 = document.createElement('h1');
fH1.innerText='DOM Practice';
fH1.classList.add('underLine');
fH1.style.color='purple';
document.querySelector('body').append(fH1);

//Qs5. Create a p tag on the page and set its text to "Apna College Delta Practice", where Delta is bold.
let para = document.createElement('p');
para.innerHTML='Apna College <b>Delta</b> Practice';
document.querySelector('body').append(para);

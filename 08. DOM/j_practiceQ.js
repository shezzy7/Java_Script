//add the following elements to the container using only js and DOM

//1- a <p> with red text that says 'hello i'm red !'
let fPara = document.createElement('p');
fPara.innerText="Hello i'm red!";
fPara.classList.add('red');
//fPara.style.color='red';
const body = document.querySelector('body');
body.append(fPara);

//2- a <h3> with blue text that says 'Hello i'm blue H3!'
let fH3 = document.createElement('h3');
fH3.innerText="Hello i'm blue H3!";
fH3.style.color='blue';
body.append(fH3);

//3- a <div> with a black border and pink backGround color with following elements inside it
    //i- another H1 that says 'I'm in a div'
    //ii= a paragraph that says 'MEE TOO'
let div = document.createElement('div');
div.style.border = '1px black solid';
div.style.backgroundColor='pink';
body.append(div);
let fH1 = document.createElement('h1');
fH1.innerText = "I'm in a div";
div.append(fH1);
let sPara = document.createElement('p');
sPara.innerText='MeE tOo';
div.append(sPara);
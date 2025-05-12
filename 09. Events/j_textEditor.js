//In this mini project we are gonna to create a mini text editor whatever we will write in our input section it will be shown in our pragraph tag,if we delete any thing from our text in input section it will be also delted from our paragraph

let input = document.querySelector('input');
let para = document.querySelector('p');
input.addEventListener('input',function(){
    para.innerText=input.value;
});
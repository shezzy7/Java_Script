        //Event Listners for Elements
//as we can apply event listners we can also apply them on other elements like paragraphs/divs etc.
//lets create a div and apply an event listner on it which will change its width and height every time in a specific range
let div5 = document.createElement('div');
div5.style.height='50px';
div5.style.width='50px';
div5.style.border='2px solid aqua';
let body = document.querySelector('body');
body.append(div5);

div5.addEventListener('mouseenter',function(){
    
    let w = getWidth();
    let h = getHeight();
    div5.style.width=`${w}px`;
    div5.style.height=`${h}px`;
    div5.innerText=`height -> ${h}px & width-> ${w}`;
});

function getHeight(){
    return Math.floor(Math.random()*800);
}
function getWidth(){
    return Math.floor(Math.random()*800);
}
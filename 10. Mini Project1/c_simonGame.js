

//array that contains name of classess of all the button which will help us in selecting random button.
let btnClasses = ['pink','orange','green','purple']
let start = false;
let level = 0;
let gameSeq=[];
let userSeq=[];
let h3 = document.querySelector('h3');
document.addEventListener('keypress',function(){
    if(!start){
        start=true;
        levelUp();

    }
})

//level up
function levelUp(){
    userSeq = [];
    level++;
    h3.innerText=`Level ${level}`;

    //after leveling up we have to flash our button,before which we have to slect random button to flash.
    let randIdx = Math.floor(Math.random()*3)+1;
    let btnToFlash = document.querySelector(`.${btnClasses[randIdx]}`);
  
    gameFlash(btnToFlash);
    gameSeq.push(btnClasses[randIdx]);
    console.log(gameSeq);
}

//flash btn
function gameFlash(btnToFlash){
    btnToFlash.classList.add('blink');
    setTimeout(function(){
        btnToFlash.classList.remove('blink');
    },400);

}
//user flash
function userFlash(btn){
    btn.classList.add('greeny');
    setTimeout(function(){
        btn.classList.remove('greeny');
    },250);
}
let allBtns = document.querySelectorAll('.btn');
for(btn of allBtns){
    btn.addEventListener('click',pressBtn);
}

//whenver we press any button this function gonna be called 
function pressBtn(){
    let btn = this;
    userFlash(btn);
    let userColor = btn.getAttribute('id');
    userSeq.push(userColor);
    matchSeq(userSeq.length-1);
}

//to match sequences
function matchSeq(idx){
    
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length===gameSeq.length){
            levelUp();
        }
    }
    else{
        gameOver();
    }
}

function gameOver(){
    h3.innerHTML = `Game Over! Your Score is <b>${level*4}</b> <br> Press any key to restart` ;  
    level=0;
    gameSeq=[];
    start = false;
    
    document.querySelector('body').classList.add('redBack');
    setTimeout(function(){
        document.querySelector('body').classList.remove('redBack');
    },500);
}

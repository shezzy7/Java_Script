        //Tic Tac Toe Game
let boxes = document.querySelectorAll('.box');
let turnO = true;
let winPatterens = [
                    [0,1,2],[3,4,5],[6,7,8],
                    [0,3,6],[1,4,7],[2,5,8],
                    [0,4,8],[2,4,6]
                   ];

let count=0;//for counting number of boxes selected for our draw condition
let win = false;//this will help us in checking if game won by antone then we will not draw it until all the boxes filled. 
boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        count++;
        if(turnO){
            box.innerText = 'O';
            turnO=false;
        }
        else{
            box.innerText = 'X';
            turnO=true;
        }
        box.disabled = true;//disable current box as it has been selected and will not be selected next time
        //check if this player has won
        checkWin();
        console.log(count," ",win);
        if(win===false && count===9){
            gameDraw();
        }
        

    })
})
let textCont=document.querySelector('.text-container');
let winner = document.querySelector(".win");
function checkWin(){
    for(pattren of winPatterens){
        let b1 = boxes[pattren[0]].innerText;
        let b2 = boxes[pattren[1]].innerText;
        let b3 = boxes[pattren[2]].innerText;
        if(b1!="" && b2!="" && b3!=""){
            if(b1===b2 && b1===b3){

                if(turnO){
                    winner.innerText =  "Game Won By Player X";
                }else{
                    winner.innerText = "Game Won By Player O";
                }
                textCont.classList.remove('dispNone');
                win=true;
        
                disableGame();//after a player has won the game make this game disable untill a new game starts
            }
        }
    }
}
//disabling game
function disableGame(){
    for(btn of boxes){
        btn.disabled=true;
    }
    textCont.style.marginBottom = '100vmin';
    textCont.style.marginTop = '40vmin';
}

//reset game when resent button pressed
let restart = document.querySelectorAll('.reset');

restart.forEach((rest)=>{
    rest.addEventListener('click',()=>{
    for(btn of boxes){
        btn.disabled=false;
        btn.innerText="";
    }
    textCont.classList.add('dispNone');
    win=false;
    count=0;
    })
    
    
})

//GameDraw
function gameDraw(){
    
    winner.innerText =  "Game Draw";
    textCont.classList.remove('dispNone');
    
    textCont.style.marginBottom = '140vmin';
    textCont.style.marginTop = '40vmin';
}
        //keyboard events
//Like mouse events there are also keyboard events like 'keydown','keyup' etc.

let inp = document.createElement('input');
inp.placeholder='write here';
body.append(inp);

inp.addEventListener('keydown', function(event){//event is an argument which we pass in our callback to get properties of mouse event
    inp.value='key pressed';//whenver we will enter into input and press down any key then its inner value will become key pressed.
    //there are also two major concepts in this keyboard events one is code and one is key.Which mean that as we know every character has a keycode and has its key value so when ever we press any key from keyboard then from javascript we can see that which key has been pressed.
    //lets print value of key and code on console which  we press in input section.
    console.log("key = ",event.key);
    console.log("code = ",event.code);
});


//lets play a simple game when we press upward key then console should print keyup,when downward console should print keydown and so on

let inp2 = document.createElement('input');
inp2.placeholder='enter key';
body.append(inp2);
inp2.addEventListener('keydown',function(event){
    if(event.code=='ArrowUp'){
        inp2.value='Upward';
    }
    else if(event.code=='ArrowDown'){
        inp2.value='Downward';
    }
    else if(event.code =='ArrowLeft'){
        inp2.value='Leftward';
    }
    else {
        inp2.value = 'Rigthward';
    }
    console.log(event.code);
})
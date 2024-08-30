let btn = document.querySelector('button');
btn.addEventListener('click',function(){
    let inp = document.querySelector('input');
    if(inp.value==""){
        alert('please add some task');
        return;
    }
    else{
        let li = document.createElement('li');
        li.innerText=inp.value;
        let ol = document.querySelector('ol');
        li.style.color='brown';
        ol.append(li);


        inp.value=null;

    }
    
    // alert('task added successfully');
})
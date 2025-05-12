let btn = document.querySelector('button');
let inp = document.querySelector('input');
let ol = document.querySelector('ol');

btn.addEventListener('click',function(){
    let val = inp.value;
    if(val==""){
        alert("Please enter some value");
        return;
    }
    let li = document.createElement('li');
    li.innerText=val;
    li.append("  ");
    let delBtn = document.createElement('button');
    delBtn.innerText="delete";
    delBtn.classList.add("delete");
    li.append(delBtn)
    li.classList.add('color');
    ol.append(li);
    inp.value="";
    console.log(li.classList);
});

// let delBtns = document.querySelectorAll('.delete');
// for(btn of delBtns){
//     btn.addEventListener('click',function(){
//         let li = this.parentElement;
//         li.remove();
//     })
// }
//to understand this code please read 'b_eventDeligation.js' file
ol.addEventListener('click', function (event) {
    let node = event.target.nodeName;
    if (node == 'BUTTON') {
        let parent = event.target.parentElement;
        parent.remove();
    }
})


//here in this code we will see that when we will press delete buttons for list items which were present already then they will be deleted from our todo list but if we press delete button for newly added items then it will not work for them this is because addEventListner only works on already present items and not on laterly added items.
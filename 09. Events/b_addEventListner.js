    //addEventListner
//obj.addEventListner('eventName',callBack Function);
//This is a widely used method.Events like onclick,onmouseenter are when applied on a sigle element for multiple times then we will only see execution of last event.But if we want to see execution of all the applied events then we use eventListner.In this method we pass eventName and function.This method executes when method and then other and then other and soo on.
//lets creame some buttons and apply this method
let btn2 = document.createElement('button');
btn2.innerText='click me';
document.querySelector('body').append(btn2);
btn2.addEventListener('click',function(){
    alert('button clicked');
});//this method will call this callback function when it will be clicked.
//there are lot of events that can be applied to this method like 'click','dblclick' etc.
//now if we add some other function on the same button thorugh addEventListner then all the function's execution will be seen.
function clickDouble(){
    console.log('i was double clicked');
}
btn2.addEventListener('dblclick',clickDouble); //when this button will be clicked double then callback fucntion will be called.
//There are lot of event that can be applied on this addEventListener we can see them on mdn.

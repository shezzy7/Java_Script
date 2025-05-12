        //Events
//Events are signals that something has occured.(user inputs/actions).For example when we give any input on any webpage then on the basis of this input webpage performs some action,this action is taken by events of the javascript(For example when we appply for any course in a university then university's portal ask for my intermediate subjects and then on the basis of this input portal shows me only those courses for which i am eligible).

//1-onclick:-This is an event which is setted to perfome some action when the element on which onclick is setted.
//lets create a button and with the help of onclick event ,when this will be clicked print an alert msg welcome to onclick event
let btn1 = document.createElement('button');
btn1.innerText='hi';
document.querySelector('body').append(btn1);
btn1.onclick = function(){
    alert('welcome');
}
//we can also do this as
function sayHello(){
    alert('hello');
}
btn1.onclick=sayHello;

//2-onmouseenter:- This method perfoms action when mouse goes over the selected element.It's like hover effect of css whenever our muse will go over selected element given action will be peformed without clicking the element
//let create a paragraph and when our mouse will go over this element then its inner text will be changed
let fH1 = document.createElement('h1');
fH1.innerText='hello';
document.querySelector('body').append(fH1);
fH1.onmouseenter = function(){
    fH1.innerText='slaam';
}

   //adding elements on the page
//with the help of javascript we can also add tags in html
//first of all we have to create element using createElement() method
//syntax-> createElement('tagName');
//lets create a paragraph and insert some text into it
const newPara=document.createElement('p');
newPara.innerHTML="above is <b>info</b>";
//so after creating our element we have to insert it in our html code where we want it.First of all we have to access the element into which we have to insert it.Lets insert it into box
const box = document.querySelector(".box");
//to add this para into box as a child we use method -> obj.appendChild(newEle);
box.appendChild(newPara);//this newPara will be appended into box at last (append means add in last)
//lets create a button and apend it in body
const btn = document.createElement('button');
btn.innerText='click me!';
btn.style.backgroundColor='orange';
const body = document.querySelector('body');
body.appendChild(btn);//button has been added in body at last
//lets make its border rounded and give it a color
btn.style.borderRadius='5px';
btn.style.border='2px green solid';

//obj.append:- it is another method with the help of which we can also add new elements ,can also add strings to a pargraph
//for example there is a paragraph in our code and lately we want to add some more text in this , then we can do this by using this append method
//lets add some text in first para through append method
const fPara = document.querySelector('p');
fPara.append("DSA enthusiasist.");
//lets also add a button in this para
let btn2 = document.createElement('button');
btn2.innerHTML="<a href='leetcode.com/shezzy'>Go to Leetcode profile</a>";
fPara.append(btn2);
//so due its more properties append is used more as compared to appendChild

//obj.prepend():- as we see both methods append and appendChild add element at last but if we want to add element at first then we use prepend method.
//lets add a button at strting of our first para
let btn3 = document.createElement('button');
btn3.innerHTML='LinkedIn';
btn3.style.backgroundColor='aqua';
btn3.style.border='2px blue solid';
btn3.style.borderRadius='5px';
fPara.prepend(btn3);
//fPara.innerHTML="<b>click me!</b>";
//obj.inseertrAdjacentElement(position,element):- with the help of this method we can also add an element in our existing element at any location .In this method position defines the location for placement of new element.There are four built-in positions for this method.
//1-beforebegin:-this method adds given element just before existing element.Lets suppose we want to add a button before our first paragraph.
let btn4 = document.createElement('button');
btn4.innerHTML='<a href="github.com/shezzy7"> Github </a>';
fPara.insertAdjacentElement('beforebegin',btn4);
//2-afterbegin:-this method adds newElement at the start of existing element.
//lets add a h1 tag at the beginning of our box
let newH1=document.createElement('h1');
newH1.innerText="welcome to info";
box.insertAdjacentElement('afterbegin',newH1);
//3-beforeend:-this method helps in adding any element just before ending of existing element
box.insertAdjacentElement('beforeend',newH1);

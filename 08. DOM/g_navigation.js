   //navigation
//1-parentElement:-We can also access parent element of any element
//syntax-> obj.parentElement
//lets print parent of h4
console.log(document.querySelector('h4').parentElement);
//2-children:-we can also access children of any element
//syntax-> obj.children
//lets print children of .box class element
const boxEle = document.querySelector('.box');
console.log(boxEle.children);
//we can also acess next and previous element(siblings) of selected element
boxEle.previousElementSibling.innerText="Hi,i'm shezzy.MERN developer.";
boxEle.nextElementSibling.innerText="Info";

//querrySelector is used to select specific elements of HTMl
//syntax -> document.querySelector('tagName'); returns first element with this tag
//syntax -> document.querySelector('#idName'); returns element with this id
//syntax -> document.querySelector('.className'); returns first element from the elements with this class name
//syntax -> document.querrySelectorAll("tagName"); returns collection fo elements  with this tag name
let ele = document.querySelector("p");
console.log(ele.innerHTML);//this print first paragraphs in html
let ele2 = document.querySelector(".oldImg");//this will get first element with this class name.Here it is the picture of hulk.Lets change its src to set iron man pic here
ele2.src = "/images/ironman.jpg";


//now lets changes src of all the images with class oldImg with   dr strange images
let ele3 = document.querySelectorAll(".oldImg");
for(let i=0;i<ele3.length;i++){
    ele3[i].src = "/images/strange.jpg"; 
}
//as here when we use querySelectorAll it returns all the elements with this tag ir class name in the form of a collection.So we have to access them separately through indices
//but in case of single element mean when we use it for single element like querySelect then it get just one element not a collection so can make changes in it direcly by its name

//if we want first anchor tag in first div then
let a1 = document.querySelector("div a");
console.log(a1);
//we can also change its href
a1.href = "https://en.wikipedia.org/wiki/Amazing_Fantasy";

//so like this we can all get all the anchor tags of div element using querySelectorAll
let a2 = document.querySelectorAll("div a");
console.log(a2);
// //this will access all the divs in our code and then will acess all the anchor tags in them will returns their collection
// //but if we want all the aanchor tags of first div then
// let a3 = document.querySelector("div");//first access the firsst div
// let a4 = document.querySelectorAll("a3 a");//and then get collection of all the anchor tags in div
// console.log(a4);


   //Manipulating style
//we can also set css properties through javascript 
//syntax-> objName.style.propertyName='value';
//And here css property's name is written in camelCase instead of using hyphen between their names.
//lets change h1's color to pink
document.querySelector('h1').style.color='pink';
//lets remove underline of all the links in our box
const links = document.querySelectorAll('.box a');
for(link1 of links){
    link1.style.textDecoration="none";
}
//lets change color of each link and set each color different.
let colors=['purple','pink','green','red'];
for(let i=0;i<links.length;i++){
    links[i].style.color=colors[i];
}
//Note: javascript adds inline styling to elements.If we apply any css property to any element in css file and then we print this style then we will see that propeties value will be empty but if we add those value in inline method then we will see them in console if we print style

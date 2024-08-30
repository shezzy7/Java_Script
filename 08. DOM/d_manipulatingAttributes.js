   //Manipulating attributes
//we can also get and change or set any attribute of any element in html.(attributes like id,class,src of an image etc.)
//1-getAttributes:-this method is used to get value of a specific attribute of an element
//syntax-> objName.getAttribute('attributeName');
//lets get value of id of second paragraph.For this first of all we have to select this paragraph in an object and then its idName using getAttribute
console.log(para2.getAttribute('id'));//description will be printed on console.If we try to get value of class of this second para then null will be returned as this element does not contains any class.
//we can also change value of any attribute and also we can add any attribute to any element if it does not contain this attribute.For example as we know para2 has an id whose value is 'description' lets change its value to intro
//syntax-> objName.setAttribute('attribute','value');
para2.setAttribute('id','intro');
//lets print its value again
console.log(para2.getAttribute('id'));
//if we have seeted any css properties for this element using description id then all the properties will be disappeared from element as we have changed our idName.
//lets give a class to this para2
para2.setAttribute('class','dev');
//lets print class name
console.log(para2.getAttribute('class')); 
//lets change src of 2nd image of last three image
const lastImages = document.querySelectorAll('.oldImg');
lastImages[1].setAttribute('src','IMG_20230919_061452.jpg');


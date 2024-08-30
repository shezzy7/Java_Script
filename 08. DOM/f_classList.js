   //classList
//We can also get class list of any element to perform any manipulation to this element.
//syntax-> obj.classList;
//lets get class list of first paragraph and print it on console
const cList = document.querySelector('p');
console.log(cList.classList);//we will see there is an empty list of classes as first paragraph don't conatains any class.So lets first ad come classes to this element.
//1- obj.classList.add():- We can also add classes to any element through this method.
//syntax-> obj.classList.add('className1 className2 ...... classNameN);
cList.classList.add('green');
console.log(cList.classList);
//so we can add multiple classes to any element and can check number and name of classes thorugh this method.
//as we can also add any class through setAttribute but this method removes all the prevoius classes of that element and set the given class as one and only class of that element
//suppose we have a class in our html code and also in css where this class makes color of the its innerText to green and we want to make some elements colour green then we can simply add this class's name to this element through this method
//lets add another class to this same attribute which adds an aqua colured wavy underline.
cList.classList.add('uLine');

//2- obj.classList.remove():- we can also remove any class from  any element through this method
cList.classList.remove('green');//now we will see green colour of our paragraph will be also removed as it was applied through green class.
//now lets print our class list
console.log(cList.classList);

//3- obj.classList.contains():- this method is used to check if given class exists or not .IF exists then then it will return true else false.
console.log(cList.classList.contains('green'));//false
console.log(cList.classList.contains('uLine'));//true

//4-obj.classList.toggle():- this method toggle between add & remove(mean if given class is present then it will remove it and will return false and if given class is not present in this element then this will it in the element and will return true).
//lets toggle 'green' class in this element 
cList.classList.toggle('green');//true as green class is not present so it will add it.
cList.classList.toggle('uLine');//false as uList is presnt in this element so it will remove its all css properties apllied to this class will be removed
//lets addma class to our box which will make its backgroud color to yellow
document.querySelector(".box").classList.add('bgYellow');

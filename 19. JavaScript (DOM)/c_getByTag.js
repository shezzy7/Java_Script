//We can also access element by tag name
//syntax -> document.getElementsByTagName("tagName");
//This returns elements as an HTML collection or empty Collection(if not found)
let ele = document.getElementsByTagName("p");
console.log(ele);
//let access first paragraph and changes its innserText
ele[0].innerText = "I'm spider man";
//lets give tag name 'span' and check result 
let ele2 = document.getElementsByTagName("span");
console.log(ele2);//this will return an empty collection

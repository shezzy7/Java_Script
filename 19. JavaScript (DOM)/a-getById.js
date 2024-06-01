    //Select elements
//1- getElementById
//      this method will find element which has given id if found then it will return it else null will be returned.Note:This method does not returns html code, it returns this part after converting it in the form of an object
//syntax ->  document.getElementById("idName");
document.getElementById('mainImg');
//so when we acess it we can make modification in it lets change this image to a new img
document.getElementById("mainImg").src = "images/thor.jpg";
//we can access every property of 'mainImg' now
//we can also change alt 
//we can also store this in another variable and then perform changes through this
let obj1 = document.getElementById("mainImg");
obj1.src = "images/spiderman.webp";
//now the img is reseted as it was before 

//If we enter wrong id name then null value is returned
let obj = document.getElementById("img");
console.log(obj);//null

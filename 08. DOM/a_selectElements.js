    //1-getElementById
//getElementById is used to select an element by its id name.It returns the element as an object if found else null will be returned.
//syntax-> document.getElementById("idName");
//lets access our element whose id is 'mainImg' and change its source to a new image
document.getElementById("mainImg").src="IMG_20230720_200941.jpg";
//we can also store this object in a variable and we can also make changes to this element by this objext like
const img1 = document.getElementById("mainImg");
img1.src="IMG_20230616_161727.jpg";
//and if we insert an id name which is not present in the code then null will be returned.

    //2-getElementsByClassName
//getElementsByClassName is used to select elements by their class name.It returns the elements as an HTML collection or empty Collection(if not found).We access different elements of the same class using indexes by their order.First element of this class will be at 0 index and so on.
//lets access elements of the class 'oldImg' and change source of first img to other.
document.getElementsByClassName("oldImg")[0].src="IMG_20230919_061452.jpg";
//lets store this class's elements collection in a variable and then iterate over this colection using a for loop and print source of each element
const images= document.getElementsByClassName("oldImg");
for(let i=0;i<images.length;i++){
    console.log(images[i].src);
}
// lets changes sources of all the elemets to a new image
for(let i=0;i<images.length;i++){
    images[i].src="IMG20231111065929.jpg";
}

    //3-getElementsByTagName
//getElementsByTagName is used to select elements by their tag name.It returns elements as an HTML collection or an empty collection(if not found).And we access each tag individually by its index.
//Lets select our pargraph tags and change values some of them
const pargraphs = document.getElementsByTagName("p");
//lets change our second paragraphs value to some other
pargraphs[1].innerText="hi,its shezzy here";

 
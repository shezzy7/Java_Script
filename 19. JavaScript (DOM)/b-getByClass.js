//as we can get element by its id name we can also acess elements fom their class name
//syntax -> document.getElementsByClassName("className");
//This method returns the elements as an HTML collection or empty Collection(if not found)
console.log(document.getElementsByClassName("oldImg"));//this will return all the elements of this class as a collection.First element will be at index 0,2nd will be at 1 and so on
//lets store them in a variable
let images = document.getElementsByClassName("oldImg");
//now we can access them by their order 0,1,2...
//as in this collection there are only three elements so we have indicex 0,1,2
//lets print 2nd elements data
console.log(images[1]);
console.log(images[1].src);
// we can also access all the elements of this collection by running a loop on this collection
//lets print alt of all the images in in this class by using a loop
for(let i=0;i<images.length;i++){
    console.log(images[i].alt)
}
//lets replace all the images with a single image
for(let i=0;i<images.length;i++){
    images[i].src = "images/ironman.jpg";
} 
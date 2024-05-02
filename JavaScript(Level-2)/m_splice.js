//slice:it is a muteable method which is used to remove/replace/add element in array.
// it makes changes in original array.
//it is similar to slice method but slice does not make changes to original array.
//splice(start,deleteCount,item0...itemN)
//start:the point from where deleting of items will be started
//deleteCount:the number of items to be deleted from given starting point
//items to be added at starting point 
let color=["red","yellow","blue","orange","pink","white"];

let col=color.splice(4);
console.log(`col: ${col}`);
console.log(`color: ${color}`);

col=color.splice(0,1);  
console.log(`col: ${col}`);
console.log(`color: ${color}`);

col=color.splice(0,2,"grey","mango");
console.log(`col: ${col}`);
console.log(`color: ${color}`);

let cars=["audi","civic","sonata","bmw","fortuner","ferrari"];
console.log(`cars before: ${cars}`);
//if we want to add an element at index 2 and do not want to delete any elemnt then
cars.splice(2,0,"mcLaron");//2 is starting index and 0 is number of elements to be removed from 
                            //that starting index and mcLaron is the element to be added at 
                            //strating index which is 2 here so mcLaron will be added at index 2 and
                            //element present at index 2 will be pushed back
console.log(`cars after: ${cars}`);
//supose we want to add some other cars at index 3 and also deleting two elemnts from 
//ondex 3 then
cars.splice(3,2,"Lamborghini","supra","lentra");
console.log(`now cars: ${cars}`);
// now if we want to replace lamborghini by vigo then we will delete lamborghini by
//givin its inddex and adding vigo
cars.splice(cars.indexOf("Lamborghini"),1,"vigo");
console.log(` with vigo : ${cars}`);




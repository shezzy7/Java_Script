//Arrays in javascript contains a variety of methods some of them are follwint
//forEach:- This method is used to acces each element of an array and perform some some operation on it.It works like for of loop.
//Syntax:-  arrayName.forEach(some functionName or defination);
let arr = [25,35,45,55,65];
arr.forEach(function(el){
    console.log(el);
});
//or
function print(el){
    console.log(el);
}
arr.forEach(print);
//or we can use arrow function
arr.forEach((el)=>{
    console.log(el);
});

//we can also use forEach method on objects.Lets suppose we have an array of objects
let brr = [ {
    name : "Shezzy",
    marks : 3.41
    },
    {
        name : "Goodo",
        marks : 3.35
    }];
brr.forEach((student)=>{
    console.log(student);
})
//accessing marks of each student
brr.forEach((stu)=>{
    console.log(stu.marks);
});
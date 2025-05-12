        //this keyword
//'this' keyword is widely used in term of objects.this refers to object calling that function.For example if we write a function that sets color of calling object to aqua then if we write this.color='aqua',then it will cahnge its color to aqua.Now if we have another object and we want to change its color to aqua,then we don't need to create another for this new object we can just call this function through this object and 'this' keyword will refer to calling object.

let p1 = document.querySelector('#p1');
let p2 = document.querySelector('#p2');
let p3 = document.querySelector('#p3');
p1.addEventListener('mouseenter',function(){
    this.style.color='aqua';
});
p2.addEventListener('click',function(){
    this.style.color='aqua';
});
//When we want to perfome same action on different objects then instead of writing same code for all times we can write one function and make use of  this operator in them as which object will call that function it will perform action on it.
//For example we want that whenever we click on our any paragraph then its font-size should increase to 30px

function changeFont(){
    this.style.fontSize='30px';
};
p1.addEventListener('click',changeFont);
p2.addEventListener('click',changeFont);
p3.addEventListener('click',changeFont);

//so this how using of 'this' keyword made our code short and effectful.
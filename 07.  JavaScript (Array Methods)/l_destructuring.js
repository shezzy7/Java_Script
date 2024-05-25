//Destructuring :- It refers to storing values of array in multiple variables.
//For exmple if we have an array let arr = [2,3,5,6]; and we write let [x,y]=arr; then this will store 2 in variable x and 3 in variable y respectively.We can declare many variables according to number of elements of array.And all the variables will get values according to elements of array respectively.First variable will get first index's value of array,second var will get second index's value and so on.
let arr = ["shezzy","hani","goodo"];
let [me,hania,zaini]=arr;
console.log(zaini);//goodo
let brr = ["zaini",5,"shezzy","guddu"];
let [gudda,age] = brr;
console.log(gudda);
console.log(age);

//we can also apply rest method here for eaxmple 
let crr = [5,6,8,9,4,2,3,5];
//if we write 
let [a,b,c,...d] = crr;//here a=5,b=6,c=8 and d will contain all the remaining part of array mean d = [9,4,2,3,5];
console.log(d);
console.log(a);
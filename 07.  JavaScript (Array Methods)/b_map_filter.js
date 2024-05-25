//map method is used to access each element of an array and perform somme operation on it and save it into a new array
//syntax -> arrayName.map(function definnation or name);
let arr = [3,5,7,9,11];
let double = arr.map((el)=>{
    return el*2;//this returned value will be stored in new arrray sequentially.
});
//lets print elements of double array using forEach loop
double.forEach((el)=>{
    console.log(el);
});

//let do this for an object
let  brr =[
    {
    name : " shezzy",
    marks : 3.41
    },
    {
        name : "Goodo",
        marks : 3.35
    }
];
let marks = brr.map((student)=>{
    return student.marks;
});
console.log(marks);//Here we will see that only marks are saved in new array this is bcz only marks we returned from map function each time.So it is clear now that using map only that data is stored in new variable which was returned from map function
//let store name in another array
function giveName(student){
    return student.name;
}
let names = brr.map(giveName);
console.log(names);
//So map function is used when we want to perform some action on each element of an array and then store it new array


//filter method filters some elemennts from given array on specific condition and returns them in the form of array
//Syntax -> arrayName.filter(function defination or funcName);
let arr2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
//lets suppose i want to filter odd elemnts from this array
let odd = arr2.filter((ele)=>{
    return ele%2!=0;//if this statement returns true then current element will be added in new array otherwise will not be added
});
console.log(odd);

//lets we want to fillter even elemennts this time from my array
let even = arr2.filter(func2);
function func2(el){
    return el%2==0;
};
console.log(even);
//lets filter all the elements less then 15 and are divisible by 4
let arr3 = arr2.filter(multipleOf4);
function multipleOf4(ele){
    return ele<15&&ele%4==0;
}
console.log(arr3);
//So it is clear now that filter call given function each time for every element of array and return value to storing variable if returned condition returned true else nothinng will be stored.

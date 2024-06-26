//Higher Order Function :-
//              A function that does one or both of the following
//                  a-Takes one or multiple functions as arguments
//                  b-returns a function 
//a-Lets talk about some function that receives functions as argument
function func1(func,n){//here this function is receiving another function as argument
    for(let i=0;i<n;i++){
        func();
    }
}
let greet = function(){
    console.log("slaam");
}
func1(greet,5);//here we sending a function as an argument
//and whenever we pass any function as an argument we've to write just its name 
//and we dont need to write paranthesis with it
//we can also pass a function likes this 
func1(function() {console.log("slaam")},10);

//b-lets see those functions that return some function as output
let request = "odd";//prompt("Please enter your  request('even','odd')");
function analyse(request){
    if(request=="even"){
        let even = function(n){
            console.log(n%2==0);
        }
        return even(5);
    }
    else if(request == "odd"){
        let odd = function(n){
            console.log(n%2==1);
        }
        return odd(5);
    }
    else{
        console.log("Wrong decision");
    }
}
console.log(analyse(request));


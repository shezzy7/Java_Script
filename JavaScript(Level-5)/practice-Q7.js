//gues the output
let greet = "Hello";
function outerGreet(){
    let greet = "Slaam";
    function innerGreet(){
        console.log(greet);
    }
    console.log(greet);
}
console.log(greet);
outerGreet();
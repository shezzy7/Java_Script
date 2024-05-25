//      false values
//  0,-0,on,"",Null,unndefined,Nan
// everything else is a truth value
let a="";
if(a){
    console.log("filled string");
}
else{
    console.log("empty string");
}

let b=" ";
if(b){
    console.log("filled string");
}
else{
    console.log("empty string");
}

let x=5;
if(x){
    console.log("true value");
}
else{
    console.log("false value");
}
//create a function that returns the concatination of all the strings in an array
let array = ["shezzy is 21 years old.","He studied in CS.","He lived at decent boys hostel."];
function concat(array){
    let con="";
    for(let i=0;i<array.length;i++){
        con=con+array[i];
    }
    return con;
} 
console.log(concat(array));

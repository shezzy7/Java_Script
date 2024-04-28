//Q1
//write a function that returns array elements larger then a number
let aray1 = [15,20,62,95,42,13,58,6,15,20,32,45,10,25,6,9];
let n = 15;

function larg(aray1,n){
    let aray2 = [];
    for(let i=0;i<aray1.length;i++){
        if(n<aray1[i]){
            aray2[i]=aray1[i];
        }
    }
    return aray2;
}

console.log(larg(aray1,n));

//Q2
//write a function to extract unique charactors from a string
// eg. let str = "abcdabcdgggefffkllk"; unique charactors="abcdefgkl"
let str = "abcdabcdeggghf";
let str2 = "";
for(let i=0;i<str.length;i++){
        let curChar = str[i];
        if(str2.indexOf(curChar) == -1){
            str2 = str2+curChar;
        }
}
console.log(`unique string is : ${str2}`);

//Q3
//write a function that accepts name of some countries and then display the name 
//of country which is the longest of all

let country = [];
//input name of countries
for(let i=0;i<5;i++){
    let newCountry = prompt(`Enter name of country ${i+1}`);
    country.push(newCountry);
}
console.log(country);
//defining function 
function state(country){
let largeCountry = 0;
                    //finfing index of largest country
for(let i=0;i<country.length;i++){
    let ansCountry = country[largeCountry].length;
    let currCountry = country[i].length;
    if(ansCountry<currCountry){
        largeCountry = i;
    }
}
return country[largeCountry];
}
console.log(state(country));

//Q4
//write a function to find number of vowels in a given string argument
let str1 = prompt("Enter strin to count number of vowels");
let vowels = 0;
function vowel(str1){
    for(let i=0;i<str1.length;i++){
        if(str1[i]=='a'|| str1[i]=='e'|| str1[i]=='i'|| str1[i]=='o'|| str1[i]=='u'){
            vowels++;
        } 
    }
    console.log(`There are ${vowels} vowels in the given string`);
}
vowel(str1);

//Q5
//create a function to generate a number b\w a specific range (start,end)
let start = 50;
let end = 150;
function randNum(start,end){
    let diff = end - start;
    let rand = Math.floor(Math.random()*diff)+start;
    return rand;
}
console.log(randNum(start,end));

//revising-Q3
let countries = [];
for(let i=0;i<5;i++){
    let newCountry = prompt(`Enter country${i}'s name`);
    countries.unshift(newCountry);
}
function lCountry(countries){
    let longCountry = 0;
    for(let i=0;i<countries.length;i++){
        if(countries[longCountry].length<countries[i].length){
            longCountry = i;
        }
    }
    return countries[longCountry];
}
console.log(lCountry(countries));
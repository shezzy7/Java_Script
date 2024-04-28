//Q1
//  create a random number b\w 1-6
let dice = Math.floor(Math.random()*6)+1;
console.log(`our generated random number is : ${dice}`);

//Q2
//  create an object representing a car that stores name,color and model of car
//  also print the name of car
const car = {
    name : "civic",
    color : "red",
    model : "2023"
};
console.log(`Car's name is : ${car.name}`);

//Q3
//  create an object person with their name,age and city
//  edit their city's original value to change it to 'Multan'
//  add new property and set it to the Pakistan
const person = {
    name : "Shezzy Jam",
    age : 21,
    city : "Faisalabad"
};
console.log(person);
person.city = "Multan";
person.country = "Pakistan";
console.log(person);


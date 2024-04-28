//get a maximum no from user and then generate a random number b\w 1 to that max number
//after generating the random ask user to guess that no also give a choice to quit if
//he cannot get the number , also provide some hints
let n=prompt("Enter maximum no");
console.log(`given max no = ${n}`);
let num=Math.random();
num=Math.floor(num*n)+1;
console.log(`generated random number = ${num}`);
let choice=prompt("Guess the number generated or quit");
while(choice!="quit"){
    if(choice==num){
        console.log("Congrates!! your guess is right the random no was = ",num,"and your guessed number is = ",choice);
        break;
    }
    if(num>choice){
        choice=prompt("Hint! your guessed number is smaller then the number generated ");
    }
    else{
        choice=prompt("Hint! your guessed number is greater then generated number")
    }
}
if(choice!=num){
    console.log("Quited");
}
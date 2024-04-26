//WAP to input two numbers and check whether their last digit is same or not
let num1=prompt("Enter first number: ");
let num2=prompt("Enter 2nd number: ");
if(num1%10==num2%10){
    console.log("Both numbers have same last digit which is ", num1%10);
}
else {
    console.log("Numbers have different last digit")
}
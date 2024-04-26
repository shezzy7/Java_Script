console.log("Hello World!");
let a=5;
let b=13;
let c=a+b;

console.log("C is ="+c+" which is sum of a and b");
//Template literals
console.log(`the sum of a , b and c is = ${a+b+c}`);
//Operators in js{

//  #1 Arithmatic Operators
console.log(a+b);
console.log(`substraction = ${a-b}`); 
console.log(`multiple = ${a*b}`);
console.log(`div = ${a/b}`);
console.log(`mod = ${a%b}`);
console.log(`pow = ${a**b}`);

//  #2 Unary operator
a++;//(post increment(first use then change(add 1)))
++a;//(pre increment(change(add +1) then use))
a--;//(post  decrement(use then substract 1))
--a;//(pre increment (change then use))

// #3 Assignment operator
a=b;//(a is equal to b)
a+=5;//(a is equal to a+5)
a-=5;//(a is equal to a-5)
a*=5;//(a is equal to a*5)
a/=5;//(a is equal to a/5)
a%=5;//(a is equal to a%5)

// #4 Comparison operator
console.log("a = "+a);
console.log(`a>10 ${a>10}`);
console.log(`a>=10 ${a>=10}`);
console.log(`a<10 ${a<10}`);
console.log(`a<=10 ${a<=10}`);
console.log(`a==10 ${a==10}`);//comparison value ,not type
console.log(`a>=10 ${a===10}`);//comparison value and also type
console.log(`a!=10 ${a!=10}`);
//  comparison of non-numbers
console.log(`'a'>'A' ${'a'>'A'}`);
console.log(`'g'<'F' ${'g'<'F'}`);
console.log(`'J'=='J' ${'J'=='J'}`);
//  #5 Logical operator

//}

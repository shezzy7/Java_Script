//WAP a program to input a string and check whether the string is golden or not
//Golden string is that string whose length is greater then 5 and it starts with 'a' or 'A'
let str=prompt("Enter string");
if((str[0]=="A" || str[0]=="a") && (str.length>5) ){
    
    console.log("Golden string");
  
}

else{
    console.log("Not a golden string");
}
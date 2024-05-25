let msg="help!";
//trim it and convert it to uppercase
let msg2=msg.trim().toUpperCase();
console.log(msg2);
//q#2
let msg3="ApnaCollege";
console.log(msg3.slice(4,9));

// Q#3
console.log(msg3.indexOf("na"));

//Q#4
console.log(msg3.replace("Apna","our")); 

// Q#5
//seprate "College" from string and replace 'l' with 't'
let msg4=msg3.slice(4).replace("l","t").replace('l','t');
console.log(msg4);
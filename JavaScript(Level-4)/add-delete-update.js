//we can also add,delete and update values in object literals
const student = {
    name : "shahzad",
    age : 21,
    marks : 94.0,
    city : "jatoi"
};
console.log(student);
//update marks to A from 94.0
student.marks="A";
//add uni name
student.uni="GCUF";
//delete age
delete student.age;
console.log(student);

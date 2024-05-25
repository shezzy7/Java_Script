//we can also create objects in arrays
// const student = [
//     {
//         name : "shezzy",
//         age : 21,
//         uni : "GCUF"
//     },
//     {
//         name : "Kashii",
//         age : 21,
//         uni : "UOEL"
//     },
//     {
//         name : "Aqib",
//         age : 21,
//         uni : "UOEDGK"
//     }
// ];
const student = [
    {
        name:"Shezzy",
        marks:1034
    },
    {
        name:"Kashiii",
        marks:1024
    },
    {
        name:"aftab",
        marks:1061
    }
];
//getting whole array
console.log(student);
//getting each index 
console.log(student[0]);
console.log(student[1]);
console.log(student[2]);
//getting values of each index individually 
console.log(student[0].name);
console.log(student[0].age);
console.log(student[0].uni);
console.log(student[1].name);
console.log(student[1].age);
console.log(student[1].uni);
console.log(student[2].name);
console.log(student[2].age);
console.log(student[2].uni);
//updating values
student[1].name="Kashif shahid";
student[2].uni="Education university";
student[0].age=20.5;
//now getting values
console.log(student[0]);
console.log(student[1]);
console.log(student[2]);
//deleting some values
delete student[0];
delete student[1].uni;
//again getting vaues
console.log(student);
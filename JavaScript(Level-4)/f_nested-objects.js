//we can also create objects in object  (nested objects)
//suppose we want to store info of three students in a single object
const student = {
    shezzy : {
        name : "shahzad hussain",
        rol : 221722,
    },
    goodo : {
        name : "Zainab Saleem",
        rol : 221742,
    },
    huzzi : {
        name : "huzaifa Ramzan",
        rol : 221726,
    }
};
console.log(student);
//we can aslo access any key individually
console.log(student.shezzy);
console.log(student.goodo);
console.log(student.huzzi);
//we can also access any specific info of any specific key
console.log(student.shezzy.name);
console.log(student.shezzy.rol);
console.log(student.goodo.name);
console.log(student.goodo.rol);
console.log(student.huzzi.name);
console.log(student.huzzi.rol);
//we can also update,delete and add values in these
student.shezzy.name="Muhammad Shahzad";
console.log(student.shezzy.name);
student.goodo.city="FSD";
console.log(student.goodo);
delete student.shezzy.rol;
console.log(student.shezzy);
console.log(student);

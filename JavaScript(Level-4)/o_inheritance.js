//Object Inheritance
// Create a parent object and a child object that inherits properties and methods from the parent.
//we can make inheritance in object using prototypes in javascript.We create an object with some properties or method or we can create it empty and then create some other child objects which inherit the properties and methods of this parent object using a built-in function
//lets create a Parent object
const Parent = {
    name : "Hussain",
    age : 48
};
//lets creaate some child object which inherits the prioperties of this parent object
const child1 = Object.create(Parent);
//if we print child.name hten this will give 'Hussain'
console.log("Child1 Name -> ",child1.name);
//but we can modify this for this child1 
child1.name = "Jawad";
console.log("Child1 Name  after change -> ",child1.name);//this will give output 'Jawad' and this will not make any changes for the parent object.For example now if we print name for parent then it will be 'Hussain'
console.log("Parent name -> ",Parent.name);
//this is how inheritance in objects works
//we can also  create child object of this child also this will also access properties of both objects Parent and child1.
const child2 = Object.create(child1);
console.log(child2.name);
//but if we add some attributes in this child2 then these attributes can't be accessed by Parent and child1.These can be only accessed by this child2 only
//lets print child2 whole
console.log(child2);
//This print an empty object as it don't have some properties or methods of itself but it can access properties of all the objects.
//If we declare some properties oof itself then it also show those properites if printed at all

// this:-'this' keyword refers to object which is executing current piece of code
//for example if we create an object of student i which we declare his/her name,age and marks of some thre subjects individually nad then inside this object create a function for calculating values of these marks then how we can access these marks in this function 

const stu={
    name:"Shezzy",
    age:21,
    phy:75,
    bio:77,
    chem:82,
    calAvg(){
        // let avg=(phy+bio+chem)/3;this will error bcz ths function cannot acess keys of this object directly.So for this purpose we use 'this' keyword to point these keys
        let avg=(this.phy+this.bio+this.chem)/3;
        console.log(`average : ${avg}`);
        //lets make this out beautiful
        console.log(`${this.name} got average marks : ${avg}`);
    }
}
stu.calAvg();


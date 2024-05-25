// setInterval:-This method is just like setTimeout mean it  call the function in it after a specific time given to it.But unlike setTimout it does not stop after calling its functions it goes on calling its functions after each interval of time given to it,like an infinite loop.
//Syntax-> setInterval(function,time)

setInterval(()=>{
    console.log(Math.random());
},2000)  //this will go onn printing a random number after each interval of 2seconds.

//For stoping we use a method.In this method we store this method in variable and then when we want to stop this method we write clearInterval(varName); and this stop it from executing more time.

let id = setInterval(salam,3000);
function salam(){
    console.log("Asslam Alaikum");
}
clearInterval(id); //but here this will stop it from executing even for one time.So we use it on console.
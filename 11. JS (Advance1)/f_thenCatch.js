
        //then & catch
//As we know promises is an object which contains his own methods like then and catch. If we want to perform some task in case if our promises was resolved(fulfilled) we use then mehtod and if promise was rejected we use catch method
//lets create another prmoise and apply these methods on him.
function gotoTrip(){
    return new Promise((resolve,reject)=>{
        let moneyInPocket = Math.floor(Math.random()*50000);
        if(moneyInPocket>25000){
            resolve();//when resolve returned it means that promise fulfilled
            console.log(moneyInPocket);
        }
        else{
            reject();//when reject returned it means that promise rejected
            console.log(moneyInPocket);
        }
        //it is not necessary to set resolve in first condition we can place it anywhere.
    })
}
//lets store this promise in a variable and apply then and catch method on it
let req = gotoTrip();
req.then(()=>{
    console.log('Trip to Naran');
})
.catch(()=>{
    console.log('Goto coffe shop');
})

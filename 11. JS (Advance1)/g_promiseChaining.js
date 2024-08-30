
        //Promises chaining
//we can also create chain of promises like in our callback hell code we were writing code that if first data stored then call for storing next data if next stored then call fro storing next data and so on lets do the same task using promise chaining.

function payFee(data){
    return new Promise((resolve,reject)=>{
        let fee = Math.floor(Math.random()*5000);
        if(fee>2500){
            resolve();
        }
        else{
            reject();
        }
    })
};

payFee('shezzy').then(()=>{
    console.log('fee paid for student1');
    //if promise entered first then ,it means that our promise was resolved and now we can proceed for paying next students fee
    payFee('goodo').then(()=>{
        console.log('fee paid for student2');
        payFee('hania').then(()=>{
            console.log('fee paid for student3');
        })
    })//but we don't need to write catch method for each call our single catch method can work for all
})
.catch(()=>{
    console.log('fee not paid');
});
//but we can also improve the above method as it also becoming bulky like callback hell

function partyWith(money){
    return new Promise((resolve,reject)=>{
        if(money>5000){
            resolve();
        }
        else{
            reject();
        }
    })
}

partyWith(5500).then(()=>{
    console.log('Dinner with goodo');
    return partyWith(7800);
})
.then(()=>{
    console.log('Dinner with goodo');
    return partyWith(3500);
})
.then(()=>{
    console.log('Dinner with goodo');
})
.catch(()=>{
    console.log('Coffe with Goodo');
})

    
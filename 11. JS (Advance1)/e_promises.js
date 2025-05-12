         //Promises

//Setting up for promises

//lets create a function in which we pass some data and two callbacks.This function generates a random speed of internet from 0-10 if speed is greater then 4 then given data will be save and one of the callbacks which name will be success will be called and if speed is less than 4 then failure function will be called.Now we have to add some other data also but it will be save only in that case if first given data was saved successfully and if we want to add some more data then it will be only saved if second give data was saved succefully

function saveData(data,success,failure){
    let netSpeed = Math.floor(Math.random()*10)+1;
    if(netSpeed>4){
        success();
    }
    else{
        failure();
    }
};

saveData('Shezzy',()=>{
    console.log('Success1: Data save successfully');
    //now if this data was save and only in that case we will be adding more data so for this purpose we can this function again from this callback
    saveData('Goodo',()=>{
        console.log('Success2: Data saved successfully');
        //now we want to save another data only in that if previous data was saved succefully,for this purpose we will call our saveData function from this success callback
        saveData('smilly Girl',()=>{
            console.log('Success3: Data saved successfully')
        },()=>{
            console.log('Failure3: weak connection,failed to save data');

        })
    },()=>{
        console.log('Failure2: weak connection,failed to save data');
    })
},()=>{
    console.log('Failure1: weak connection,failed to save data');
});

//so in this we can nest a long list of callbacks that will create a callback hell that made our code complex to understand.

//To prevent our code from callback hell we uses promises.

//Promises object represents the eventual completion or failure of an asynchronous operation and its resulting value.
//Each promise contains two terms reject and resolve
//lets concise our above code using promises

function saveDb(data){
    return new Promise((resolve,reject)=>{
        let netSpeed = Math.floor(Math.random()*10)+1;
        if(netSpeed>4){
            resolve('Data saved successfull');
        }
        else{
            reject('Weak connection,data not saved');
        }
    })
}

console.log(saveDb('hello world'));

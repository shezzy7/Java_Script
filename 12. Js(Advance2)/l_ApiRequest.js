                                    //Our First API request
//lets do an api request.We use fetch method for doing api requests.
//syntax-> fetch(url);
//before fetch method there was a method known as XMLHTTPRequestObj but this method contains some issues due to which it was rejected and a new method fetch was introduced and we use this method for our API calls.
let url = "https://catfact.ninja/fact";
//fetch method return a promise in result and we can apply promise's  method to result
fetch(url)  
.then((res1)=>{
    console.log("result1 " ,res);//when our request got accepted and API return a response in result then in returning process before our other data our request hits return headers line and when this line is hitted by server then we got header in result instead of main data.So now we have headers in result and with the help of these headers we can get our main data.
    //for getting our data we convert reesult to json formate
    return res.json();//this will return a promise and then we can apply promise's method on it 
})
.then((data1)=>{
    console.log("data1 " ,data1);//this will print main result in json formate
    console.log("fact1 -> ",data1.fact);//this will give value of key 'fact' which is present in our res2 object
    //if we want to get another fact then we can do this again in this way
    return fetch(url);//now it will return a promise in which headers will be present and we can get data from it by converting it to json ormate a before
})
.then((res2)=>{
    console.log("result2 " ,res2);
    return res2.json();
})
.then((data2)=>{
    console.log("data2 " ,data2);
    console.log("fact2 -> ",data2.fact);
})
.catch((err)=>{
    console.log(err);
})

//if we write another line of code after these api calls then javascript will execute it immediately and will not wait for our API's response whichc means that our javascript code works asynchronously
console.log("I'm happy");//this will be executed first of all as our apis take some time to give some response and javascript does not wait for this response it executes other code and when it receives response from api it executes it.
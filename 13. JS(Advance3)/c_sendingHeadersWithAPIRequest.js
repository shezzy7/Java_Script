            //Sending Headers with API Request
//We can also send headers to our API request as we setted them at Hoppscotch for setting our type of data that API will return(application/json,text/plain,text/html).
//For this purpose we can store our header in a variable and then pass this variable with url in axios.get method.
//lets set a api which will return a joke each time its called and it return data in text/plain
//header(we can give any name to this variable)
let url = "https://icanhazdadjoke.com/";
async function getJoke(){
    try{
        const config = {headers:{accept:"text/plain"}};
        let joke = await axios.get(url,config);
        console.log(joke.data);
        //lets get another joke but we change headers now and set application.json now
        config.headers = {accept:"application/json"};
        joke = await axios.get(url,config);
        console.log(joke.data)
    }
    catch(er){
        console.log("ERROR - ",er);
    }
}
//so in this way we can pass headers to our axios method for getting desireable type of data.
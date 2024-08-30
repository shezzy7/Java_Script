        //async , await keywords can be used with fetch for making our results more good

let url = "https://catfact.ninja/fact";
async function getFact(){
    try{
        let res1  = await fetch(url);//Our API may take some time to response but our javascript code will not wait for this response and will put some undefined data to this variable res1.So to preventing from this undefined result we use await keyword and which will wait for our API's response and then next execution will happen .this will return a promise containing headers(unreadable data).So we have to convert to json formate
    let data1 = await res1.json();//as this will also return a promise which may take some time to response so we have to use await keyword with this to get a defined result
    console.log(data1.fact);
    //let do another call
    let res2 = await fetch(url);
    let data2 = await res2.json();
    console.log(data2.fact);
    //As our api may generate some error some time so in this case our api calls will fail in this case we have to do somethinng that will execute if our api does not give desireable results.
    //For this we can use try and catch method
    } catch(err){
        console.log("Error ",err);
    }

}
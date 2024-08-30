        //Axios
//Axios method is a replacement of fetch method, as it's a best from fetch.The reason is that this method returns data in json formate directly and we don't need to convert data to json formate after getting from our API.
//syntax-> axios.get(url);  this method also returns a promise 
//for using this method we've to add a script tag with src "https://cdn.jsdeliver.net/npm/axios@1.1.2/dist/axios.min.js"  in our html code.
let url = "https://catfact.ninja/fact";
async function getFacts(){
    try{
        let res = await axios.get(url);
        console.log(res.fact);//returned data is already in json formate so we don't need to convert it to json form
        res = await axios.get(url);
        console.log(res.fact);
    }catch(er){
        console.log(err);
    }
}

//lets connect our HTML code with js to do a simple activity where there will be button ,on clicking this will show a catfact on page layout
let h1 = document.createElement('h1');
h1.innerText = "Get Cat Facts here";
let body=document.querySelector('body');
body.append(h1);
let btn = document.createElement('button');
btn.innerText="Get Fact";
body.append(btn);
let p = document.createElement('p'); 
body.append(p);
btn.addEventListener('click', async ()=>{
    let res = await getFacts2();//as this function will return a promise and may also take some time to get response from api so we will use await keyword with out function call and await can only be written inside async functions so we will make our function asynchronous.
    console.log(res);
    p.innerText=res;
})
async function getFacts2(){
    try{
        let res =  await axios.get(url);
        return res.data.fact;
    }
    catch(er){
        return "No Fact Found";
    }
}
//let creat a page layout which will get name of country and with a search button when search button called then a list of universities in this country should be returned.
//we will use api "http://universitites.hipolabs.com/search?name=" alongside with a query string.
let url = "http://universities.hipolabs.com/search?name=";
let inp = document.createElement("input");
inp.placeholder="Enter country";
inp.style.height = '30px';

let btn = document.createElement('button');
btn.innerText="Search";
btn.style.padding='8px';
btn.style.backgroundColor='green';
btn.style.color='white';
btn.style.border='2px solid white';
let body = document.querySelector('body');
body.append(inp,btn);
let ol = document.createElement('ol');
let country;
body.append(ol);
btn.addEventListener('click',async ()=>{
    country = inp.value;
    let data = await getData(country);
    setData(data);
})

async function getData(country){
    try{
        let res = await axios.get(url+country);
        return  res.data;
    }
    catch(er){
        return [];
    }
}

function setData(data){
    ol.innerText="";
    let h2 = document.createElement('h2');
    h2.innerText=`Universities in ${country}`;
    ol.append(h2);
    for(d of data){
        let li = document.createElement('li');
        li.innerText=d.name;
        li.style.color='aqua';
        ol.append(li);
    }
}
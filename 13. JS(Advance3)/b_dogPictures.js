//lets create a page layout along with a button and on clicking this button a dog's image will appear on screen with the help of api which returns url for dogs pics.
let h2 = document.createElement('h2');
h2.innerText="Dogs Pictures";
let btn2 = document.createElement('button');
btn2.innerText="Get Pic";
btn2.style.backgroundColor='Orange';
let image = document.createElement('img');
let body = document.querySelector('body');
let lineBreak = document.createElement('br');

body.append(h2,btn2,image);
btn2.addEventListener('click',async ()=>{
    try{
    let link = await getImg();
    image.setAttribute('src',link);
    }
    catch(er){
        return '/';
    }
})
let url2 = "https://dog.ceo/api/breeds/image/random";
async function getImg(){
    let src = await axios.get(url2);
    return src.data.message; 
}
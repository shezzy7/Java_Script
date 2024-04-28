//set a fav movie and then input names of movies untill he user inputs the same movie name
let fav=prompt("My fav movie name(enter 'quit' if you can't get it): ");
while(fav!="thor" && fav!="quit"){
    fav=prompt("fav movie doesn't match enter movie name again");
};
if(fav!="quit"){
console.log("your fav movie name has been mached");
}
else{
    console.log("quited!");
}

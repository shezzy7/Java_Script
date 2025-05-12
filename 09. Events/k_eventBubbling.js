        //Event bubbling
//When add same events on elements which are nested in a parent and parent also contains that event then when applied event occurs due to nested element then this event also occurs for parent element.
//for example lets apply an  click event on div,ul,and all li
let div = document.querySelector('div');
let ul = document.querySelector('ul');
let lis = document.querySelectorAll('li');
div.addEventListener('click',function(){
    console.log('div was clicked');//if we click on div then this will be printed on console
});
ul.addEventListener('click',function(){
    console.log('ul was clicked');//if we click on ul then 'ul was clicked' and 'div was clicked' both will be printed on console bcz ul is nested in div and both contians same click event this is known as event bubling.
});
for(li of lis){
    li.addEventListener('click',function(){
        console.log('li was clicked');//if we click on any li then 'li was clicked','ul was clicked' and 'div was clicked' trio will be printed on console bcz li is nested in ul, and ul is nested in div and trio contians same click event this is known as event bubling.

    });
}
//to prevent event bubbling we use a method stopPropagation 
//lets do this on new div
let div2 = document.querySelector('#div');
let ul2 = document.querySelector('#ul');
let lis2 = document.querySelectorAll('.li');
div2.addEventListener('click',function(event){
    
    console.log('div was clicked');//if we click on div then this will be printed on console
});
ul2.addEventListener('click',function(event){
    event.stopPropagation();
    console.log('ul was clicked');//if we click on ul then 'ul was clicked' and 'div was clicked' both will be printed on console bcz ul is nested in div and both contians same click event this is known as event bubling.
});
for(li of lis2){
    li.addEventListener('click',function(event){
        event.stopPropagation();
        console.log('li was clicked');//if we click on any li then 'li was clicked','ul was clicked' and 'div was clicked' trio will be printed on console bcz li is nested in ul, and ul is nested in div and trio contians same click event this is known as event bubling.

    });
}





        //form events
//Like mouse and keyboard events there are also form events which are basically special for our forms.
//we have created a form in our html code which contains an input section and a submit button of type submit
//in form tag added an invalid url in action section so when will press submit button this will take us at /action url.To avoid this we can use an inbuilt event of forms to prevent us from taking to that default given url

let form1 = document.querySelector('#form1');

form1.addEventListener('submit',function(){
        alert('submitted');//after pressing submit button an alert msg will be shown and then it will then take us to url given in action attribute.
});
//but we can prevent from going to given url after pressing submit button but using a form event preventDefault();
//lets create another form and apply this event on that to see difference

let form2 = document.querySelector('#form2');
form2.addEventListener('submit',function(event){
        event.preventDefault();
        alert('submitted');
});

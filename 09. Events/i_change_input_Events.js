        //change event
//This event occurs when value of an element has been changed(only works on <input>,<textarea> and <select> elements).
//For example if we input some value in our input tag and then when come out of our input section then it means that we have maded some changes to our input tag then changeEvent  will be called 
let inp3 = document.querySelector('#cEvent');
inp3.addEventListener('change',function(){
    console.log('change event');
    console.log(inp3.value);
//so after making any when we comeout of our tag then a message will be print on console 'change event' and value of our input.
});

        //input event
        //The input event fires when the value of an <input>,<textarea> or <select> element has been changed.
        //This works same as change event but the difference between them is that chnage event occurs when we have done our change and come out of our tag.But input event occurs when whenver we make any chnages to our tag even we don't come out our tag.For example if we write a word then it will be called and then if print some other character then it will be also called for that character also and so 
inp3.addEventListener('input',function(){
    console.log('input event');//this event will be called instantly whenever we make any change in input.
    console.log(inp3.value);
});






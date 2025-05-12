        //Extracting form data
//We can also extract inner data of form 
//To access innerText of our input element we don't use input.innerText we but as we have readed before that inner data of an input tag is known as value so we use obj.value

form2.addEventListener('submit',function(event){
    event.preventDefault();
    let inp2= document.querySelectorAll('input');
    console.log(inp2[1].value);
});

//we have an input with placeholder username and another input with placeholder password and a button.So when after entering user name and password we want to print them in an alert message
let user= document.querySelector('#user');
let pass= document.querySelector('#pass');
let signIn = document.querySelector('#logIn');
signIn.addEventListener('submit',function(event){
    event.preventDefault();
    alert(`Hi ${user.value}, youe password is set to ${pass.value}` );
});

//To fetch inner elements of our form tag ,instead of giving each element an id and then fetch it through its id name we can also fetch them by indexing as the form object contains a collection of inner elements
//lets do above work by using this property
signIn.addEventListener('submit',function(event){
    event.preventDefault();
    let username = signIn.elements[0];
    let password = signIn.elements[1];
    console.log(`Hi ${username.value}, your password is set to ${password.value}`);
})
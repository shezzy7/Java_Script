   //setting content in objects
//After selecting specific element from HTML we can manipulate them.
//1-innerText:- shows the visible text contained in a node.(basically it refers to the text which is displayed on our web page)
//if we want to change to any text which is displyed on our webpage then we use this property
//lets select our first paragraph and change its inner text to other
document.querySelector('p').innerText="Hi,its shezzy here.DSA enthuasist and MERN developer";//this will simple convert its inner text to this new one.
// 2-textContent:- Shows all the full text(it contains all the content as we write in our vscode.it shows when we break line and all the textContent which is present in our vscode excluding tags.For example if we make some elements display as hidden then it will be hided from screen and if we print innertext of this element then this hidden tags element will be unvisible.But if we print textContent of this element then this hidden element will also be visible bcz textContent shows all the text written in our html)
console.log(document.querySelector('p'));

//3-innerHTML:-shows the full markup(it gets all the inner html.Mean if we want to change inner html of a paragraph mean we want to change some pargraphs text and also want to add some bold/anchor/italic etc tags then we use innerHTML.If we print innerHTML for any element then it will all the HTML written in this element).
//lets change data of second paragraph and add some bold tags.
const para2 = document.querySelectorAll('p')[1];
para2.innerHTML = "Hi,welcome to <b> shezzy</b>'s web"; //this make word shezzy bold as ut us written in b tag but we write this <b> tag in innerText property then this will not make shezzy bold and also it will be displayed on screen.
//lets suppose we want to underline a pargraph in our webpage then we can store this para in a variable like here para2 contains second para of our page to avoid writing whole para in our code,lets underline
para2.innerHTML=`<u>${para2.innerText}</u>`;

    //Remove elements from page
//As we can add elements on our page through javascript,we can also remove elements from page thorugh javascript

//1-removeChild():- This method is used to remove any child of selected parent object
//syntax-> obj.removeChild('removeElementName(tagName/idName)');
//lets remove github button from page.First of all lets select its parent first
let bd = document.querySelector('body');
bd.removeChild(btn4);
//github button has been removed now

//2-remove():- Through this method we can also remove any element directly from page without selecting its parent.
//syntax-> eleName.remove();
//lets remove newH1 from page
newH1.remove();
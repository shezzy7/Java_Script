//Event Delegation
//As we see in our todo app when we add new elements in our page using javascript and we also have applied eventListner on these elements already present,then we see that eventListner only works for elements that we present before in our html code not on elements that were added lately.So this concept in known as event delegation.
//So to prevent from event deligation we use concept of event bubbling.
//our event argument in callback contains a property 'target' which tells that which element is clicked from nested elements of parent element.For example as we know fom event bubbling that if a click event is applied on a parent then if we click any child on this parent then click event fo parent will be called but we don't know that which inner element was clicked either it was a button/list item or something else so to see this we use event.target and this target contains name of clicked element in capital letters.So we will use this property to delete our newly added items in the list.We will a click event on ol/ul and then when delete button will be click then then click event will be called and we will check whether button is clicked or any other element is clicked by using target property.So if delete button was clicked then we get parent of this delete button which is we know our li item and we will delet this from list 
//And to see name of target we have another property nodeName.


let ol = document.querySelectorAll('ol');
ol.addEventListner('click', function (event) {
    if (event.target.nodeName == 'BUTTON') {
        let parent = event.target.parentElement;
        parent.remove();

    }
})
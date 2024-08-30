   //4-querrySelector
//this method is used to select elements as we select them in css.
//document.querrySelector('tagName'); this will get first element with this tag name.
//document.querrySelector('.className');this will get first element with this class name.
//document.querrySelector('#idName');this will get element with this idName.
document.querySelector('img').src="IMG_20231120_195901.jpg";//this will get first image tag and will change its source
document.querySelector('.oldImg').src="IMG_20230720_200941.jpg";//this will get first element of this class 'oldImg' and will set its source to given value.
document.querySelector('#description').innerText="hi,welcome to shezzy's web";//this will get element with id 'description' and will change its inner text to this one.
//we can also get all elements of given tag or class in following way
document.querySelectorAll('img');//this will get all the image tags in the form of ListNode.



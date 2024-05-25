//every method returns true if every element of givrn array returnss true on some specific condition else false is returned.
//Syntax -> arrayName.every(function defination or funcNamme);
//let suppose we have na array and we want to check that every elemtn of array is even or not 
let arr = [2,4,6,8,10,12,14,16,18,1];
console.log(arr.every((ele)=>{
    return ele%2==0;
}));//false will be returned as given array contains 1 whic is an oddnumber.
//every method runs given funtion for each element of given array checks given condition for it.If given condition keeps going true for each element then kepps checking unit all the elements are checked.But if it encounter any elemnt for ehih given condition is returning false then it will stop checking other remaining elements will return false as answer. 
let arr2 = [5,10,15,20,25,30,35,40];
//lets check if this array contains elements which can be divised by 5 completely
let ans = arr2.every(diviseBy5);
function diviseBy5(ele){
    return ele%5==0;
}
console.log(ans);//true

//'some' method is like 'every' method but it is different in such a way that 'every' method iterates over all the elemnts of array if any single element returns it false then it returns false.but 'some' method iterates over evey element of array and returns true if given condition returns true for any elemnt of array
//Syntax -> arrayName.some(function definationn or funcName);
let arr4 = [14,16,18,20,22,13,16];
//lets wa e want to check whether this array contains any odd element 
console.log(arr4.some((ele)=>{
    return ele%2==1;
}));//true will be returned bcz 13 is present in this array which is odd
//now if we check this array for any even element then this method will also retuen true bcz this array contains many even element 
console.log(arr4.some(even2));
function even2(ele){
    return ele%2;
}//true

//so main difference between every and some is also clear from there name that every method returns true if alll the element of given array return true on given condition and some methods needs only single element of array whih retuens true on given condition.
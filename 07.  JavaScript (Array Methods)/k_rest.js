//This function works oppsite to spread method.
//It allows function to take an indefinite number of arguments and bundle them in an array
//syntax ->> function funcName(...argumentName){//body}
function func(...args){
    for(let i=0;i<args.length;i++){
    console.log(args[i]);
    }
}
func(1,2,3,4,5,7,8);//this method is used when we don't knnow no of arguments given to our funtion.Like Math.min function receives indenite number of arguments and apply some operation on and returns minimum value from the,,.So each time it does not know number of arguments ,this is bcz it uses this method to accept indefinite number of arguments

//if we give any number of arguments to this function then this store all of them in form of array and we can get each of them using their indexs respectively as they were passes to function
//we can pass multiple types of data to this function
let arr = [1,5,6];
let str = "shezzy";
func(arr,str);

//There is a special features js.Whatvere arguments we pass to a function these are stored in a variable name 'arguments'.Even if we don't receive them through parameters and don't write params then they are also stored in this arguments
function func2(){
    console.log(arguments);//this argument treates as object it soteres all the arguments pass to this function in form of key value pair.key is their index as they are passed to function.Like here there will be object arguments storing values as {'0':5,'1':2,'2':3,'3':6}
}
func2(5,2,3,6);


//lets find minimum from given elements using 
function min(...arr){
    return arr.reduce((m,ele)=> {
        if(m>ele){
            return ele;
        }
        else {
            return m;
        }
    })
}
let ans = min(5,6,2,8,1,3,9);
console.log(ans);

//lets find multiple each number by 5 
let arr2 = mulBy2(2,3,4,5,6);
function mulBy2(...args){
    return args.map((ele)=>{
        return ele*2;
    })
}
console.log(arr2);

//lets get odd elements only
let arr3 = odd(1,2,3,4,5,6,7,8,9);
function odd(...args){
    return args.filter((ele)=>{
        return ele%2==1;
    })
}
console.log(arr3);
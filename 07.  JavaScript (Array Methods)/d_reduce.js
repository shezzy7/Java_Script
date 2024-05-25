//reduce method reduces an array to a single value
//Syntaxxx -> arrayName.reduce(function with 2 vaiables(acccumalter,element));
let ans = [1,2,3,4].reduce((ac,ele)=>{
   return ac+ele;
})
console.log(ans);//10
//we can give any name to accumaltor any name to current value of array.But first var will be considered as  accumolator and second as current value of array.First of ll accumalator will have value 0 and current element will be 1 for this array then this function will return 0+1 and ths result willl be stored in accumulator and when this function will be clled for next elemnt then accumlator 's value will be  1 and current element is 2 and this function will return 1+2=3 and itt will be stored in accumulator and then this function will be called for next will of array and thiss process will keep going untill all the elements of array are traversed and there result will be stored in accumulaor and when whole array is traversed then accumulator will mov its valu to storing variable whhich ans here so this is how reduce function works on arrray.
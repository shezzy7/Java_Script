let array=[["abu bakar","umar","usman","ali"],["abuzar ghafari","salman farsi","zaid","ameer hamza"],["anas","abu huraira","umair"]];
//we can access elements of nested arrays individully using nested loops
for(let i=0;i<array.length;i++){
    for(let j=0;j<array[i].length;j++){
        console.log(i,j , array[i][j])
    }
}

let student=[["shahzad",94],["hammad",98],["madni",75]];
for(let i=0;i<student.length;i++){
    console.log(`info of student no:${i+1}`);
    for(let j=0;j<student[i].length;j++){
            console.log(student[i][j]);
    }
}
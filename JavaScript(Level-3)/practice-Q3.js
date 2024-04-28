let list=[];
let req=prompt("Please enter your choice");
while(req!="quit"){
    if(req=="list"){
        console.log("--------------");
        console.log(list);
        console.log("--------------");
    }
    
    else if(req=="add"){
        let work=prompt("Enter your task: ");
        list.push(work);
        console.log(`${work} added successfully!`);
    }
    
    else if(req=="delete"){
        let del=prompt("Enter what you want to remove from 'todo' list");
        if(list.includes(del)){
            let idx=list.indexOf(del);
            list.splice(idx,1);
            console.log(`${del}  removed successfullty `)
        }
         else{
        console.log(`${del} is not present in the list`);
        }
    }
    else{
        console.log(`sorry you have entered wrong choice!`);
    }
    req=prompt("Please your next choice");
}
console.log("Quited succesfully!");

const flag = true
if (!flag){ // expression is becoming false and not flag value
    console.log("Condition satisfied")
}
else{
    console.log(flag)
    console.log("Condition not satisfied")
}

let i = 0
while(i < 10){
    i++;
    console.log(i)
}

let j = 0
do{
    j++
    console.log(j)
}while(j>10); 

//common multiple if 2 and 5 till 50 (first 3 numbers)
let count = 0;
for(let k = 1; k <= 50; k++){
    if(k%2 == 0 && k%5 ==0){
        count++;
        console.log(k);
        if(count == 3){
            break;
        }    
    }
}
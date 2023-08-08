function maxNumber(input){

    let index = 0;
    let command = "";
    

    let maxNum = Number.MIN_SAFE_INTEGER;
 
    while(command !== "Stop"){
        command = input[index];
        let num = Number(command);
        

        if(num > maxNum){
            maxNum=num;
    }
        
            if(command === "Stop"){
                break;
            }
           
          
        index++;
    }
    console.log(maxNum);


}

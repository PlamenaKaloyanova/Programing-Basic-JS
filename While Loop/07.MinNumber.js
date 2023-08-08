function minNumber(input){

    let index = 0;
    let command = "";
    

    let minNum = Number.MAX_SAFE_INTEGER;
 
    while(command !== "Stop"){
        command = input[index];
        let num = Number(command);
        

        if(num < minNum){
            minNum=num;
    }
        
            if(command === "Stop"){
                break;
            }
           
          
        index++;
    }
    console.log(minNum);
}

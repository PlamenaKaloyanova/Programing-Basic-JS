function traveling(input){
    let index=0;
    let command="";
    


    while(command!=="End"){
        command=input[index];
        let destination=(command);
        index++;
        let budjet=Number(input[index]);
        index++;
        let sum=0;


        if(command==="End"){
            break;
        }

        while(sum<budjet){
            let curenntSum=Number(input[index]);
            sum+=curenntSum;
            index++;
            if(sum>=budjet){
                console.log(`Going to ${destination}!`);
                continue;
            }
        }

        
        command=input[index];

    }

}

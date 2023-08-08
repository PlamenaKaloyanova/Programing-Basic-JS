function trainTrainers(input){
    let index=0;
    let countJury=Number(input[index]);
    index++;

    let command=input[index];
    let countGrade=0;
    let finalSum=0;
    while(command!=="Finish"){
        command=input[index];
        let namePresentation=(command)
        index++;
        
  
       
        let sum=0;
       
        

       
       for(let i=0;i<countJury;i++){
           let currentGrade=Number(input[index]);
           countGrade++;
           index++;
           sum+=currentGrade;
       }
       let sum1=(sum/countJury)
    
           
 
    command=input[index];
   

    console.log(`${namePresentation} - ${sum1.toFixed(2)}.`);
    finalSum+=sum;

    }


console.log(`Student's final assessment is ${(finalSum/countGrade).toFixed(2)}.`)

}

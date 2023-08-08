function oscars(input) {

    let actorName = input[0];
    let score = Number(input[1]);
   
    let sum = 0;
    let nameAssessor = "";
    let assessorScore = 0;

    let nameAssessora = 0;

    for (let i = 3; i <=input.length - 1; i++) {
        nameAssessor = input[i++];
        assessorScore =Number(input[i]);
        nameAssessora = Number(nameAssessor.length);
        sum = score + ((nameAssessora * assessorScore) / 2);
        score = sum;
            if(score>1250.50){
               break;
            }
            
        }
    
      

    if (sum > 1250.5) {
        console.log(`Congratulations, ${actorName} got a nominee for leading role with ${(sum.toFixed(1))}!`);
 } else {
    console.log(`Sorry, ${actorName} you need ${(1250.5-sum).toFixed(1)} more!`);
    }

}

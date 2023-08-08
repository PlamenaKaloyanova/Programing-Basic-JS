function examPreparation(input){
    let index=0;
    let countPoorGrade=Number(input[index]);
    index++;


    let countAllGrade=0;
    let averageScore=0;
    let lastProblem="";

    let score=0;
    let command="";
    let nameProblem="";
    let sum=0;
    let poorGrade=0;

    while(command !=="Enough"){
        command=input[index];
        if(command === "Enough"){
            break;
        }
        nameProblem=command;
        index++;
        

        score=Number(input[index]);
        index++;

        sum+=score;
        countAllGrade++;

        if(score<=4){
            poorGrade++;
        }

        if(poorGrade === countPoorGrade ){
            break;

        }


    }

if(command==="Enough"){
    console.log(`Average score: ${(sum/countAllGrade).toFixed(2)}`);
    console.log(`Number of problems: ${countAllGrade}`);
    console.log(`Last problem: ${nameProblem}`);
}else{
    console.log(`You need a break, ${poorGrade} poor grades.`)
}


}

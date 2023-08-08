function tennis(input) {


    let countTurnirs = Number(input[0]);
    let score = Number(input[1]);
    let finalScore = score;
    let typeTurnir = "";
    let averagePoint = 0;
    let countW=0;
    let countF=0;
    let countSf=0;


    for (let i = 2; i <= input.length - 1; i++) {
        typeTurnir = input[i];
        switch (typeTurnir) {
            case "W": finalScore+= 2000; countW+=1; break;
            case "F": finalScore+= 1200; countF+=1; break;
            case "SF": finalScore+= 720;countSf+=1; break;
        }
       

    }
    console.log(`Final points: ${finalScore}`)
    averagePoint = Math.floor((finalScore-score)/countTurnirs);
    console.log(`Average points: ${averagePoint}`)
    console.log(`${((countW/countTurnirs)*100).toFixed(2)}%`)


}

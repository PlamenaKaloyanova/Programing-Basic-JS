function shopping(input){


    let budget = Number(input[0]);
    let countVideocarts = Number(input[1]);
    let countProcesors = Number(input[2]);
    let countRam = Number(input[3]);

    let sumVideocarts = countVideocarts * 250;
    let sumProcesors = countProcesors * (sumVideocarts * 0.35);
    let sumRam = countRam * (sumVideocarts * 0.10);

    let finalSum= sumProcesors + sumRam+ sumVideocarts;

    if(countVideocarts>countProcesors){
        finalSum = (finalSum * 0.85);
    }

    if(budget >= finalSum){
        console.log(`You have ${(budget-finalSum).toFixed(2)} leva left!`)
    }else{
        console.log(`Not enough money! You need ${(finalSum-budget).toFixed(2)} leva more!`)
    }


}

function journey(input){
    let budget = Number(input[0]);
    let season = input[1];
    let destination = "";
    let sum = 0;
    let type = "";

    switch (season){
        case "summer": type = "Camp" ;break; 
        case "winter": type = "Hotel";break
            default:break
    }
    if(budget <= 100){
        destination = "Bulgaria";
        if(season == "summer"){
            sum = budget * 0.3;
        }else {
            sum = budget * 0.7;
        }
    }else if(budget<= 1000){
        destination = "Balkans";
        if (season == "summer"){
            sum = budget * 0.4;
            
        }else{
            sum = budget * 0.8;
        }
    }else{
        destination = "Europe";
        sum = budget * 0.9;
        type = "Hotel";
    }


console.log(`Somewhere in ${destination} `)
console.log(`${type} - ${sum.toFixed(2)}`)
}

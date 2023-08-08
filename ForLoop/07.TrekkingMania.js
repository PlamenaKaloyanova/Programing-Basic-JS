function trekking(input){

    let countGroups = Number(input[0]);

    let countPeople =0;
    let sum = 0;
    let musala = 0;
    let monblan = 0;
    let kilimandjaro = 0;
    let k2 = 0;
    let everest = 0;
    
    for(i = 1; i<=countGroups; i++){
        let countPeople=Number(input[i]);
        sum +=countPeople;

        if(countPeople<=5){
           musala+=countPeople;
        }else if(countPeople<=12){
            monblan+=countPeople
        }else if(countPeople <=25){
            kilimandjaro+=countPeople
        }else if (countPeople<=40){
            k2+=countPeople;
        }else{
            everest +=countPeople;
        }
    }

    console.log(`${((musala/sum)*100).toFixed(2)}%`);
    console.log(`${((monblan/sum)*100).toFixed(2)}%`);
    console.log(`${((kilimandjaro/sum)*100).toFixed(2)}%`);
    console.log(`${((k2/sum)*100).toFixed(2)}%`);
    console.log(`${((everest/sum)*100).toFixed(2)}%`);


}

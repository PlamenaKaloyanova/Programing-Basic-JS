function demo(input){

    let age = Number(input[0]);
    let priceWashingMachine = Number(input[1]);
    let priceToy = Number(input[2]);


    let sumOfMoney = 0;
    let sumOfToys = 0;
    let currentMoney = 10;
    for (i = 1; i<= age; i++){
      if(i % 2 ===0){
          sumOfMoney +=currentMoney;
          currentMoney +=10;
          sumOfMoney -=1;
      }else{
          sumOfToys+=1;
      }
    }
sumOfMoney = sumOfMoney + (sumOfToys * priceToy);
let result = Math.abs(priceWashingMachine-sumOfMoney)
if(sumOfMoney>=priceWashingMachine){
    console.log(`Yes! ${(sumOfMoney-priceWashingMachine).toFixed(2)}`)
}else{
 console.log(`No! ${result.toFixed(2)}`);
}


}

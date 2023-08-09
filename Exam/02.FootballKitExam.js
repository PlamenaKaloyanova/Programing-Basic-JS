function footballKit(input){

    let priceTshirt=Number(input[0]);
    let target=Number(input[1]);

    let priceShorts=priceTshirt*0.75;
    let priceSocks=priceShorts*0.20;

    let priceShoes=(priceShorts+priceTshirt)*2;

    let sum=priceShoes+priceShorts+priceSocks+priceTshirt;

    let finalSum=sum*0.85;


    if(finalSum>=target){
        console.log("Yes, he will earn the world-cup replica ball!");
        console.log(`His sum is ${finalSum.toFixed(2)} lv.`)
    }else{
        console.log("No, he will not earn the world-cup replica ball.");
        console.log(`He needs ${(target-finalSum).toFixed(2)} lv. more.`)
    }


    





}
footballKit(["55",
"310"])


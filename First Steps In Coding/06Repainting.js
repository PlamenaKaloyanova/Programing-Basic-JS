function demo(input){

    let quantityNylon = Number(input[0]);
    let quantityPaint =Number(input[1]);
    let quantityThinner=Number(input[2]);
    let hours = Number(input[3]);
    let sumBag = 0.40;

    let sumNylon = (quantityNylon + 2) * 1.50;
    let sumPaint =( quantityPaint + (quantityPaint * 10/100)) *14.50;
    let sumThinner = quantityThinner * 5;

    let sum = sumNylon + sumPaint + sumThinner + sumBag;
    let sumWork = (sum * 30/100) * hours;
    let finalSum = sum + sumWork;

    console.log(finalSum);

}

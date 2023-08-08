function landScaping(input) {
    let area = Number(input[0]);
    let price = 7.61;
    let discount = 0.18;
    let priceDiscount = (area * price) * discount;
    let finalPrice = (area * price) - priceDiscount;
    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${priceDiscount} lv.`);
   

}

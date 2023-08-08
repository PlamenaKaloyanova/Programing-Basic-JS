function calculatorDeposit(input) {
    let depositSum = Number(input[0]);
    let depositPeriod = Number(input[1]);
    let percent = Number(input[2]);
    let finalsum = depositSum + depositPeriod * ((depositSum * percent/100) / 12);


    console.log(finalsum);
}

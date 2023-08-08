function godzilla(input) {
    let budget = Number(input[0]);
    let numberOfStatists = Number(input[1]);
    let priceForClothes = Number(input[2]);

    let decor = budget * 0.1;

    if (numberOfStatists > 150) {
        priceForClothes = priceForClothes * 0.9;
    }


    let sumClothes = numberOfStatists * priceForClothes;
    let sumFilm = sumClothes + decor;

   
    if (sumFilm > budget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(sumFilm-budget).toFixed(2)} leva more.`);
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget-sumFilm).toFixed(2)} leva left. `);
    }

}

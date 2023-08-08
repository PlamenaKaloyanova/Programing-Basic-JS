function fishing(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let count = Number(input[2]);

    let sum = 0;

    switch (season) {
        case "Spring": sum = 3000; break;
        case "Summer":
        case "Autumn": sum = 4200; break;
        case "Winter": sum = 2600; break;
        default: break;
    }
    if (count <= 6) {
        sum = sum * 0.9;
    } else if (count > 7 && count <= 11) {
        sum = sum * 0.85;
    } else {
        sum = sum * 0.75;
    }
    if (count % 2 === 0 && season != "Autumn") {
        sum = sum * 0.95;
    }

    if (budget >= sum) {
        console.log(`Yes! You have ${(budget - sum).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(sum - budget).toFixed(2)} leva.`)
    }


}

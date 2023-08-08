function house(input) {
    let type = input[0];
    let count = Number(input[1]);
    let budget = Number(input[2]);

    let sum = 0;

    switch (type) {
        case "Roses": {
            if (count > 80) {
                sum = (count * 5) * 0.9;
            } else {
                sum = count * 5;
            }
        } break;
        case "Dahlias": {
            if (count > 90) {
                sum = (count * 3.80) * 0.85;
            } else {
                sum = count * 3.80
            }
        } break;
        case "Tulips": {
            if (count > 80) {
                sum = (count * 2.80) * 0.85;
            } else {
                sum = count * 2.80;
            }
        } break;
        case "Narcissus": {
            if (count < 120) {
                sum = (count * (3 * 1.15));
            } else {
                sum = count * 3;
            }
        } break;
        case "Gladiolus": {
            if (count < 80) {
                sum = (count * (2.50 * 1.20));
            } else {
                sum = count * 2.50;
            }
        } break;
        default: break;

    }
    if (sum <= budget) {
        console.log(`Hey, you have a great garden with ${count} ${type} and ${(budget - sum).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(sum - budget).toFixed(2)} leva more.`)
    }



}

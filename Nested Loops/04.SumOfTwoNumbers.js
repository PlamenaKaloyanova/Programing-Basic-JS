function sumOfTwoNumbers(input) {

    let firstNumber = Number(input[0]);
    let lastNumber = Number(input[1]);

    let magicalNumber = Number(input[2]);

    let counter = 0;

    let isFound = false;

    for (let i = firstNumber; i <= lastNumber; i++) {

        for (let z = firstNumber; z <= lastNumber; z++) {
            counter++;
            if (i + z === magicalNumber) {
                console.log(`Combination N:${counter} (${i} + ${z} = ${magicalNumber})`);
                isFound = true;
                break;
            }

        }
        if (isFound) {
            break;
        }
    }
    if (!isFound) {
        console.log(`${counter} combinations - neither equals ${magicalNumber}`)
    }

}

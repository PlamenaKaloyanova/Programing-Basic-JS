function sumNumbers(input) {

    let n = (input[0]);
    let numToText = n + "";

    let sum = 0;
    for (i = 0; i < numToText.length; i++) {
        let num = Number(numToText[i]);
        sum = sum + num;
    }


console.log(`The sum of the digits is:${sum}`);

}

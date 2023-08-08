function equalSum(input) {
    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);
    let current="";
    let result="";


    for (let currentNum = firstNum; currentNum <= secondNum; currentNum++) {
        let num = (currentNum);
        let num1 = "" + num;
        let firstnum = num1[0];
        let sumOdd = 0;
        let sumEven = 0;
        for (let i =0; i < num1.length; i++) {
            current = Number(num1[i]);
            if ((i === 0) || (i === 2) || (i === 4)) {
                sumOdd += current;
            } else {
                sumEven += current;
            }

        }
        if(sumEven===sumOdd){
            result+=(`${currentNum} `);
        }




    }
    console.log(result)

}

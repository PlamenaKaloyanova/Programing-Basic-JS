function numberPiramid(input) {
    let n = Number(input[0]);
    let current = 1;
    let isBigger = false;
    let printCurrent = "";



    for (let row = 1; row <= n; row++) {
        for (let cols = 1; cols <= row; cols++) {
            if (current > n) {
                isBigger = true;
                break;
            }
            printCurrent += current + " ";
            current++;

        }
        console.log(printCurrent);
        printCurrent="";
        if(isBigger){
            break;
        }
    }


}

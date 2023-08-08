function lunchBreak(input){


    let name = input[0];
    let timeForSerial = Number(input[1]);
    let timeForBreak = Number(input[2]);

    let timeForLunch = timeForBreak * 1/8;
    let timeForRest = timeForBreak * 1/4;

    let timeLeft = timeForBreak - timeForLunch - timeForRest;

    if (timeLeft>=timeForSerial){
        console.log(`You have enough time to watch ${name} and left with ${Math.ceil(timeLeft-timeForSerial)} minutes free time.`);
    }else{

        console.log(`You don't have enough time to watch ${name}, you need ${Math.ceil(timeForSerial-timeLeft)} more minutes.`)
    }



}

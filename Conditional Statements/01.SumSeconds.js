function sumSeconds(input){
    let timeFirst = Number(input[0]);
    let timeSecond = Number (input[1]);
    let timeThitd = Number (input[2]);
   
    let totalTime = timeFirst + timeSecond + timeThitd;
    let minutes =Math.floor(totalTime / 60);
    let second = totalTime % 60;
   
    if (second < 10){
       console.log(`${minutes}:0${second}`);
    }else{
        console.log(`${minutes}:${second}`);
    }
   
   
   }

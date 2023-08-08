function trip(input){
  let day = Number(input[0]);
  let type = input[1];
  let grade = input[2];

  let nights = day - 1;
  let result = 0;

  if (day < 10){
      switch (type){
          case "room for one person": result = nights * 18;break;
          case "apartment": result= (nights * 25)*0.70;break;
          case "president apartment":result = (nights *35) * 0.9;break;
          default: break;
      }
    }
if (day >= 10 && day <= 15){
     switch (type){
         case "room for one person": result = nights * 18;break;
         case "apartment": result=(nights * 25) * 0.65;break;
         case "president apartment": result = (nights *35)*0.85;break;
         default:break;
     }
    }
if (day > 15){
    switch (type){
        case "room for one person": result= nights * 18;break;
        case "apartment":result= (nights *25)*0.50;break;
        case "president apartment":result=( nights * 35)* 0.80;break;
            default:break;
    }

}
if (grade === "positive"){
    result = result * 1.25;
}else{
    result = result * 0.90;
}



console.log(result.toFixed(2));
}

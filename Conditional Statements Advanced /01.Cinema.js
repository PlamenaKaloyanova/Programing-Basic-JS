function cinema(input){
  let type = input[0];
  let r = Number(input[1]);
  let c = Number(input[2]);
  let income = 0;

  switch (type){
case "Premiere": income = r * c * 12;break;
case "Normal": income = r * c * 7.50;break;
case "Discount":income = r * c * 5;break;
default: break;
  }


  console.log(`${income.toFixed(2)} leva`);



}

function basketball(input){
  let sumTraining = Number(input[0]);
  
  let sneakers = sumTraining - (sumTraining * 0.4);
  let outfit = sneakers - (sneakers * 0.2);
  let ball = outfit * 1/4;
  let accessories = ball * 1/5;

  let finalSum = sumTraining + sneakers + outfit + ball + accessories;

console.log(finalSum.toFixed(2));
}

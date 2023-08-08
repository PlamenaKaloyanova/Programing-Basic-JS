function demo(input){
 let chickenMenu = Number(input[0]);
 let fishMenu = Number(input[1]);
 let vegetarianMenu = Number(input[2]);

  let sumChickenMenu = chickenMenu * 10.35;
  let sumFishMenu = fishMenu *12.40;
  let sumVegetarianMenu = vegetarianMenu * 8.15;
  let sum = (sumChickenMenu + sumFishMenu + sumVegetarianMenu);
  let desert = sum * 0.2;
  let finalSum = sum + desert + 2.50;

  console.log(`${finalSum}`)

}

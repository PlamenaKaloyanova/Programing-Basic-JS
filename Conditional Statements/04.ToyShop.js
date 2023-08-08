function profit (input){
  let excursion = Number (input [0]);
  let puzzles = Number (input[1]);
  let dolls = Number(input[2]);
  let bears =  Number (input[3]);
  let minions = Number (input[4]);
  let trucks = Number (input[5]) ;

  let money = puzzles * 2.6 + dolls * 3 + bears * 4.1 + minions * 8.20 + trucks * 2;
  let numberOfToys = puzzles + dolls + bears + minions + trucks;


  if (numberOfToys >= 50 ){
    money = money * 0.75;
  }
    money = money * 0.90;
    if (money >= excursion){
    console.log(`Yes! ${(money - excursion).toFixed(2)} lv left.`)
    } else {
        console.log(`Not enough money! ${(Math.abs(money - excursion).toFixed(2))} lv needed.`)
    }
}

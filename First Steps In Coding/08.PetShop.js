function petStore(input) {
    let dogs = Number(input[0]);
    let otherAnimal = Number(input[1]);
    let dogFood = 2.50;
    let otherFood = 4;
    let finalAmount = (dogs * dogFood) + (otherAnimal * otherFood);
    console.log(finalAmount + ' ' + 'lv.');

}

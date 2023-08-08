function demo(input){
let countPens = Number(input[0]);
let countMarkers = Number(input[1]);
let abstergent = Number(input[2]);
let discount = Number(input[3]);


let sum =( (countMarkers * 7.20) + (countPens * 5.80) +(abstergent * 1.20));
let finalSum = sum - (sum * discount/100);


console.log(finalSum);


}

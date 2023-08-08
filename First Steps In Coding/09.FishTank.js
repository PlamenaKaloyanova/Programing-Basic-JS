function aquarium(input) {
    let aquariumLength = Number(input[0]);
    let aquariumWidth = Number(input[1]);
    let aquariumHeight = Number(input[2]);
    let aquariumPercent = Number(input[3]);

    let capacity = aquariumLength * aquariumWidth * aquariumHeight;

    let Liters = capacity * 0.001;

    let percent = aquariumPercent / 100;

    let totalLiters = Liters * (1 - percent);


    console.log(totalLiters);

}

function animal(input) {
    let typeAnimal = input[0];

    switch (typeAnimal) {
        case "dog": console.log("mammal"); break;
        case "snake":
        case "crocodile":
        case "tortoise": console.log("reptile"); break;
        default: console.log("unknown"); break;

    }

}

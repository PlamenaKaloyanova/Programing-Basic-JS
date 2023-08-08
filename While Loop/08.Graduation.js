function graduation(input) {
    let index = 0;
    let nameStudent = input[index];
    index++;

    let grade = 0;
    let averageGrade = 0;
    let sumGrade = 0
    let counter = 0;
    let caunter2 = 0;

    for (let i = 1; i <= input.length - 1; i++) {
        grade = Number(input[i]);
        counter++;

        if (grade >= 4) {
            sumGrade += grade;
        } else {
            caunter2++;
        }

        if (grade === 2 || grade < 4) {
            caunter2++;
            break;
        }

        if (caunter2 === 2) {
            break;
        }


    }

    averageGrade = sumGrade / counter;

    if (grade === 2 || grade < 4) {
        console.log(`${nameStudent} has been excluded at ${counter} grade`)
    } else {
        console.log(`${nameStudent} graduated. Average grade: ${averageGrade.toFixed(2)}`);
    }

}

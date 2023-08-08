function areaOfFigure(input) {
    let type = (input[0]);
    let area = '';
    
    if (type === 'square') {
        let num = Number(input[1]);
        area = num * num;

    } else if (type === 'rectangle') {
        let num1 = Number(input[1]);
        let num2 = Number(input[2]);
        area = num1 * num2;

    } else if (type === 'circle') {
        let r = Number(input[1]);
        area = Math.PI * r * r;

    } else {
        let numA = (input[1]);
        let numB = (input[2]);
        area = (numA * numB) / 2;


    }

    console.log(area.toFixed(3));
}

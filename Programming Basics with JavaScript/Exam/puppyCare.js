function puppyCare(input) {
    let foodKg = Number(input[0]);
    let index = 1;
    let command = input[index];

    let leftOverFood = foodKg * 1000;
    let food = 0;

    while (command !== 'Adopted') {
        let food = Number(command);
        leftOverFood -= food;
        index++;
        command = input[index];
    }
    if (leftOverFood >= 0) {
        console.log(`Food is enough! Leftovers: ${leftOverFood} grams.`);
    } else {
        console.log(`Food is not enough. You need ${Math.abs(leftOverFood)} grams more.`);
    }
}
puppyCare(["4", "130", "345" , "400", "180", "230", "120", "Adopted"])


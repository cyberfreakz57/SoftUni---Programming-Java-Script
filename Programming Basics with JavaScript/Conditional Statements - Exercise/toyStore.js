function toyStore(input) {
    let travelPrice = Number(input[0]);
    let countPuzzles = Number(input[1]);
    let countDolls = Number(input[2]);
    let countBears = Number(input[3]);
    let countMinions = Number(input[4]);
    let countTrucks = Number(input[5]);

    let totalPrice = (countPuzzles * 2.60) + (countDolls * 3) + (countBears * 4.10) + (countMinions * 8.20) + (countTrucks * 2);

    let totalToys = countPuzzles + countDolls + countBears + countMinions + countTrucks;

    if (totalToys >= 50) {
       let discount =  0.25 * totalPrice;
        totalPrice = totalPrice - discount;
    } 

    let rent = 0.10 * totalPrice;
    totalPrice = totalPrice - rent;

    if (totalPrice >= travelPrice) {
        console.log(`Yes! ${(totalPrice - travelPrice).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(travelPrice - totalPrice).toFixed(2)} lv needed.`);
    }
}

toyStore(["40.8", "20", "25", "30", "50", "10"])

toyStore(["320", "8", "2", "5", "5", "1"])
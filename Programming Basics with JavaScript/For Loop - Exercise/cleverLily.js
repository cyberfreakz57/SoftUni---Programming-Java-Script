function cleverLily(input) {

    let age = Number(input[0]);
    let washingMachinePrice = Number(input[1]).toFixed(2);
    let toyPrice = Number(input[2]);

    let birthdayMoney = 0;
    let toys = 0;
    let stolenMoney = 0;

    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0){
            birthdayMoney += 10 * (i / 2);
            stolenMoney += 1;
        } else {
            toys += 1;   
        }
    }

    let soldToys = toys * toyPrice;
    let totalMoney = birthdayMoney + soldToys - stolenMoney;

    if (totalMoney >= washingMachinePrice) {
        let canBuy = (totalMoney - washingMachinePrice).toFixed(2);
        console.log(`Yes! ${canBuy}`);
    } else {
        let cantBuy = (washingMachinePrice - totalMoney).toFixed(2);
        console.log(`No! ${cantBuy}`);
    }
}
cleverLily(["10", "170.00", "6"])
cleverLily(["21", "1570.98", "3"])
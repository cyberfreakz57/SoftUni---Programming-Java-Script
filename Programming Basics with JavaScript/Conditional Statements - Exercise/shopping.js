function shoppingCart (input) {

    let budget = Number(input[0]);
    let gpu = Number(input[1]);
    let cpu = Number(input[2]);
    let ram = Number(input[3]);

    let gpuPrice = 250;
    let cpuPrice = 0.35 * (gpuPrice * gpu);
    let ramPrice = 0.1 * (gpuPrice * gpu);

    let totalPrice = (gpuPrice * gpu) + (cpuPrice * cpu) + (ramPrice * ram);

    if (gpu > cpu) {
        totalPrice = totalPrice - (totalPrice * 0.15);
    }

    let remainingBudget = budget - totalPrice;
    let budgetNeeded = totalPrice - budget;

    if (totalPrice <= budget) {
        console.log(`You have ${remainingBudget.toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${budgetNeeded.toFixed(2)} leva more!`);
    }
}
shoppingCart(["900", "2", "1", "3"])
shoppingCart(["920.45", "3", "1", "1"])
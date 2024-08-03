function accBalance(input) {
    let moneyIn = input[0];
    let balance = 0;
    let index = 1;

    while (moneyIn !== "NoMoreMoney") {
        
        let amount = Number(moneyIn);

        if (amount <= 0) {
            console.log("Invalid operation!");
            break;
        }
        balance += amount;
        console.log("Increase: " + Number(amount).toFixed(2));
        moneyIn = input[index];
        index++;
        
    }
    console.log("Total: " + `${balance.toFixed(2)}`);
}
accBalance(["5.51", "69.42", "100", "NoMoreMoney"])
accBalance(["120", "45.55", "-150"])
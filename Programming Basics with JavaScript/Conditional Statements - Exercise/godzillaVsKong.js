function godzillaVsKong(input) {
    let budget = Number(input[0]);
    let extras = Number(input[1]);
    let clothesPrice = Number(input[2]);

    let decor = 0.10 * budget;
    let clothes = extras * clothesPrice;

    if (extras >= 150) {
        let discount = 0.10 * clothes;
        clothes = clothes - discount;
    }
    let totalPrice = decor + clothes;

    if (totalPrice <= budget) {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${(budget - totalPrice).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${(totalPrice - budget).toFixed(2)} leva more.`);
    }
    
}
godzillaVsKong(["20000", "120", "55.5"])

godzillaVsKong(["15437.62", "186", "57.99"])

godzillaVsKong(["9587.88", "222", "55.68"])

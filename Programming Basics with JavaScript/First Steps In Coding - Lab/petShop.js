function petShop(input) {
    let dogFood = Number(input[0]) * 2.50;
    let catFood = Number(input[1]) * 4;
    let total = dogFood + catFood;
    console.log(total + " lv.");
}
petShop(['5', '4'])
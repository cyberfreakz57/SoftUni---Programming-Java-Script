function yardGreening(input){
    let squareMeters = Number(input[0]);
    let price = squareMeters * 7.61;
    let discount = price * 0.18;
    let finalPrice = price - discount;
    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}
yardGreening(['550'])
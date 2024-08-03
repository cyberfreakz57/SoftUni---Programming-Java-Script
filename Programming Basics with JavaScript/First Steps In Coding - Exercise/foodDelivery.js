function foodDelivery(input) {
    let chicken = Number(input[0]) * 10.35
    let fish = Number(input[1]) * 12.40
    let vegetarian = Number(input[2]) * 8.15
    let menuPrice = chicken + fish + vegetarian
    let desert = (0.20 * menuPrice)
    let delivery  = 2.50
    let total = menuPrice + desert + delivery
    console.log(total)
}
foodDelivery(["2", "4", "3"])

function foodDelivery2(input) {
    let chicken = Number(input[0]) * 10.35
    let fish = Number(input[1]) * 12.40
    let vegetarian = Number(input[2]) * 8.15
    let menuPrice = chicken + fish + vegetarian
    let desert = (0.20 * menuPrice)
    let delivery  = 2.50
    let total = menuPrice + desert + delivery
    console.log(total)
}
foodDelivery2(["9", "2", "6"])
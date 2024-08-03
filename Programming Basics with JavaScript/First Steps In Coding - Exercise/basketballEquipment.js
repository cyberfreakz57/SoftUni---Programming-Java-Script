function basketballEquipment(input) {
    let tax = Number(input[0]);
    let sneakers = tax - (tax * 0.4);
    let uniform = sneakers - (sneakers * 0.2);
    let basketball = uniform * 0.25;
    let accessories = basketball * 0.2;
    let expenses = (tax +sneakers + uniform + basketball + accessories);
    console.log(expenses)
}
basketballEquipment(["365"])

function basketballEquipment2(input) {
    let tax = Number(input[0]);
    let sneakers = tax - (tax * 0.4);
    let uniform = sneakers - (sneakers * 0.2);
    let basketball = uniform * 0.25;
    let accessories = basketball * 0.2;
    let expenses = (tax +sneakers + uniform + basketball + accessories);
    console.log(expenses)
}
basketballEquipment2(["550"])
function studyMaterials(input) {
    let pencils = Number(input[0]) * 5.80
    let markers = Number(input[1]) * 7.20
    let erasers = Number(input[2]) * 1.20
    let discount = Number(input[3]) / 100
    let sumPacks = pencils + markers + erasers
    let sum = sumPacks - (sumPacks * discount)
    console.log(sum)
}
studyMaterials(['2', '3', '4', '25']);

function studyMaterials2(input) {
    let pencils = Number(input[0]) * 5.80
    let markers = Number(input[1]) * 7.20
    let erasers = Number(input[2]) * 1.20
    let discount = Number(input[3]) / 100
    let sumPacks = pencils + markers + erasers
    let sum = sumPacks - (sumPacks * discount)
    console.log(sum)
}
studyMaterials2(['4', '2', '5', '13']);
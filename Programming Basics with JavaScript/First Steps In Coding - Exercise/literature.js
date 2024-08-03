function literature(input) {
    let pagesInBook = Number(input[0])
    let pagesPerHour = Number(input[1])
    let days = Number(input[2])
    let hours = pagesInBook / pagesPerHour / days
    console.log(hours)
}
literature(['212','20','2'])

function literature2(input) {
    let pagesInBook = Number(input[0])
    let pagesPerHour = Number(input[1])
    let days = Number(input[2])
    let hours = pagesInBook / pagesPerHour / days
    console.log(hours)
}
literature2(['432','15','4'])
function checkNumber(input) {
    let number = Number(input[0]);
    if (number >= -100 && number <= 100 && number != 0) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}
checkNumber(["-25"]);
checkNumber(["0"]);
checkNumber(["25"]);
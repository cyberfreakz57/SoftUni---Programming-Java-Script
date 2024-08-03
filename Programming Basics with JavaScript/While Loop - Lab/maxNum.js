function maxNum(input) {
    let inputElement = input[0];
    let index = 1;
    let max = Number.MIN_SAFE_INTEGER;


    while (inputElement !== "Stop") {
        let num = Number(inputElement);
        if (num > max) {
            max = num;
        }
        inputElement = input[index];
        index++;
    }
    console.log(max);
}
maxNum(["100", "99", "80", "70", "Stop"]);
maxNum(["-10", "20", "-30", "Stop"]);
maxNum(["45", "-20", "7", "99", "Stop"]);
maxNum(["999", "Stop"]);
maxNum(["-1", "-2", "Stop"]);
function minNum(input) {
    let inputElement = input[0];
    let index = 1;
    let min = Number.MAX_SAFE_INTEGER;


    while (inputElement !== "Stop") {
        let num = Number(inputElement);
        if (num < min) {
            min = num;
        }
        inputElement = input[index];
        index++;
    }
    console.log(min);
}
minNum(["100", "99", "80", "70", "Stop"]);
minNum(["-10", "20", "-30", "Stop"]);
minNum(["45", "-20", "7", "99", "Stop"]);
minNum(["999", "Stop"]);
minNum(["-1", "-2", "Stop"]);
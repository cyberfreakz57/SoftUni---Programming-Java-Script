function printSum (start, end) {
    let sum = 0;
    let numbers = "";
        for (let i = start; i <= end; i++) {
            sum += i;
            numbers += i + " ";
        }
    console.log(numbers);
    console.log(`Sum: ${sum}`);
}
printSum(["5", "10"]);
printSum(["0", "26"]);
printSum(["50", "60"]);
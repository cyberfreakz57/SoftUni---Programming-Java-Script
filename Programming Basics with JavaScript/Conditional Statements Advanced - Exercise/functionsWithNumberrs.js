function functions(input) {
    let firstNumber = Number(input[0]);
    let secondNumber = Number(input[1]);
    let numberOperator = input[2];
    let result = 0

    switch (numberOperator) {
        case "+":
            result = firstNumber + secondNumber;
            break;
        case "-":
            result = firstNumber - secondNumber;
            break;
        case "*":
            result = firstNumber * secondNumber;
            break;
        case "/":
            result = (firstNumber / secondNumber).toFixed(2);
            break;
        case "%":
            result = firstNumber % secondNumber; 
            break;
        }

    if ((numberOperator === "+" || numberOperator === "-" || numberOperator === "*") && result % 2 === 0) {
        console.log(`${firstNumber} ${numberOperator} ${secondNumber} = ${result} - even`)
    } else if ((numberOperator === "+" || numberOperator === "-" || numberOperator === "*") && result % 2 !== 0) {
        console.log(`${firstNumber} ${numberOperator} ${secondNumber} = ${result} - odd`)
    }    

    if (secondNumber === 0 && (numberOperator === "/" || numberOperator === "%")) {
        console.log(`Cannot divide ${firstNumber} by zero`)
    } else if (numberOperator === "/") {
        console.log(`${firstNumber} / ${secondNumber} = ${result}`);
    } else if (numberOperator === "%") {
        console.log(`${firstNumber} % ${secondNumber} = ${result}`);
    }
    
}
functions(["10", "12", "+"])
functions(["123", "12", "/"])
functions(["112", "0", "/"])
functions(["10", "1", "-"])
functions(["10", "3", "%"])
functions(["7", "3","*"])
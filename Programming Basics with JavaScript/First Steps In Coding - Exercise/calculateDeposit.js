function calculateDeposits(input) {
    let depositAmount = Number(input[0]);
    let months = Number(input[1]);
    let interestRate = Number(input[2]) /100;
    let sum = depositAmount + months * ((depositAmount * interestRate) / 12)
    console.log(sum);
}
calculateDeposits(['200', '3', '5.7'])

function calculateDeposits2(input) {
    let depositAmount = Number(input[0]);
    let months = Number(input[1]);
    let interestRate = Number(input[2]) * 0.01;
    let sum = depositAmount + months * ((depositAmount * interestRate) / 12)
    console.log(sum);
}
calculateDeposits2(['2350', '6', '7'])
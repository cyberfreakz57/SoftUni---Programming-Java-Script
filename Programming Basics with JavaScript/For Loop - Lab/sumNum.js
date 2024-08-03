function sumNum(input) {
    
    let num = input[0];
    let sum = 0;
    
    for (let a = 0; a < num.length; a++) {
        sum += Number(num[a]);
    }
    console.log(`The sum of the digits is:${sum}`)
}
sumNum(['1234'])
sumNum(['564891'])
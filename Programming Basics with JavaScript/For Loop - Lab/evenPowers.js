function powerOf2(input){
    let number = Number(input[0]);

    for (let n = 0; n <= number; n++) {
        if (n % 2 === 0){
            console.log(Math.pow(2, n));
        }
    }
}
powerOf2(["5"])
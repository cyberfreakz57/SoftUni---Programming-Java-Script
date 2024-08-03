function coins(input) {
    let change = Number(input[0]);
    let coins = 0;

    while (change !== 0) {
        if (change >= 2) {
            change -= 2;
            coins++;
            continue;
        }
        if (change >= 1) {
            change -= 1;
            coins++;
            continue;
        }
        if (change >= 0.5) {
            change -= 0.5;
            coins++;
            continue;
        }
        if (change >= 0.2) {
            change -= 0.2;
            coins++;
            continue;
        }
        if (change >= 0.1) {
            change -= 0.1;
            coins++;
            continue;
        }
        if (change >= 0.05) {
            change -= 0.05;
            coins++;
            continue;
        }   
        if (change >= 0.02) {
            change -= 0.02;
            coins++;
            continue;
        }
        if (change >= 0.01) {
            change -= 0.01;
            coins++;
            break;
        }
    }
    if (change === 0) {
    console.log(coins);
    }
}
coins(["1.23"]);
// coins(["2"]);
// coins(["0.56"]);
// coins(["2.73"]);
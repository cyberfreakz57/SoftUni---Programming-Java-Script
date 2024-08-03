function histogram(input) {

    let amountNum = Number(input[0]);

    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let count4 = 0;
    let count5 = 0;

    for(let i = 1; i <= amountNum; i++){

        let currentNum = Number(input[i]);

        if(currentNum < 200){
            count1++;
        } else if (currentNum < 400){
            count2++;
        } else if (currentNum < 600){
            count3++;
        } else if (currentNum < 800){
            count4++;
        } else { 
            count5++;
        }
    }
    
    let percent1 = (count1 / amountNum) * 100;
    let percent2 = (count2 / amountNum) * 100;
    let percent3 = (count3 / amountNum) * 100;
    let percent4 = (count4 / amountNum) * 100;
    let percent5 = (count5 / amountNum) * 100;

    console.log(`${percent1.toFixed(2)}%`);
    console.log(`${percent2.toFixed(2)}%`);
    console.log(`${percent3.toFixed(2)}%`);
    console.log(`${percent4.toFixed(2)}%`);
    console.log(`${percent5.toFixed(2)}%`);

}
histogram(["3", "1", "2", "999"])
histogram(["7", "800", "801", "250", "199", "399", "599", "799"])
histogram(["9", "367", "99", "200", "799", "999", "333", "555", "111", "9"])
histogram(["14", "53", "7", "56", "180", "450", "920", "12", "7", "150", "250", "680", "2", "600", "200"])
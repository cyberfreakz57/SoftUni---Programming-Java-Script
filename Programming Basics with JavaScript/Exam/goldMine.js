function goldMine(input) {

    let index = 0;
    let locationsAmount = Number(input[index++]);

    for (let l = 0; l <= locationsAmount; l++) {
        let averageGoldExpected = Number(input[index++]);
        let daysMinedAtLocation = Number(input[index++]);
        let goldEarned = 0;

        for (let d = 0; d < daysMinedAtLocation; d++) {
            let currentGoldEarned = Number(input[index++]);
            goldEarned += currentGoldEarned;
        }

        let averageGoldEarned = goldEarned / daysMinedAtLocation;
        let difference = Math.abs(averageGoldExpected - averageGoldEarned);

        if (averageGoldExpected > averageGoldEarned) {
            console.log(`You need ${difference.toFixed(2)} gold.`);    
        } else if (averageGoldExpected <= averageGoldEarned) {
            console.log(`Good job! Average gold per day: ${averageGoldEarned.toFixed(2)}.`);
        }
    }
}
goldMine(["2", "10", "3", "10", "10", "11", "20", "2", "20", "10"])
goldMine(["1", "5", "3", "10", "1", "3"])
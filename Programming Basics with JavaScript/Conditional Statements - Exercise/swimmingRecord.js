function breakRecord(input) {

    let recordTime = Number(input[0]);
    let distance = Number(input[1]);
    let time = Number(input[2]);

    let totalTime = distance * time;
    let delay = Math.floor(distance / 15) * 12.5;

    let timeEarned = (totalTime + delay).toFixed(2); ;

    let timeNeeded = (timeEarned - recordTime).toFixed(2);

    if (recordTime <= timeEarned) {
        console.log(`No, he failed! He was ${timeNeeded} seconds slower.`);
    } else {
        console.log(`Yes, he succeeded! The new world record is ${timeEarned} seconds.`);
    }

    console.log(totalTime);
    console.log(delay);
    console.log(timeEarned);
    console.log(timeNeeded);
}
breakRecord(["10464", "1500", "20"])
breakRecord(["55555.67", "3017", "5.03"])

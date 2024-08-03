function lunchBreak(input) {

    let movieName = input[0];
    let movieTime = Number(input[1]);
    let breakTime = Number(input[2]);

    let lunchTime = (breakTime / 8);
    let restTime = (breakTime / 4);

    let freeTime = (breakTime - lunchTime - restTime);

    if (movieTime <= freeTime) {
        let timeLeft = Math.ceil(freeTime - movieTime);
        console.log(`You have enough time to watch ${movieName} and left with ${Math.ceil(timeLeft)} minutes free time.`);
    } else {
        let timeNeeded = Math.ceil(movieTime - freeTime);
        console.log(`You don't have enough time to watch ${movieName}, you need ${Math.ceil(timeNeeded)} more minutes.`);
    }
}
lunchBreak(["Game of Thrones", "60", "96"])
lunchBreak(["Teen Wolf", "48", "60"])

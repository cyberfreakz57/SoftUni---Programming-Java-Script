function tennisCompetition(input) {
    let tournament = Number(input[0]);
    let startPoints = Number(input[1]);
    
    let currentPoints = 0;
    let totalPoints = 0;
    let averageTournamentPoints = 0;
    let percentWin = 0;
    let wins = 0;
   

    for (i = 2; i <= input.length; i++){
        let currentStage = input[i];
        totalPoints = startPoints + currentPoints;

        if (currentStage === "W"){
            currentPoints += 2000;
            wins += 1;
        } else if (currentStage === "F"){
            currentPoints += 1200;
        } else if (currentStage === "SF"){
            currentPoints += 720;
        }
        averageTournamentPoints = Math.floor(currentPoints / tournament);
        percentWin = ((wins / tournament) * 100).toFixed(2);

    }
    console.log(`Final points: ${totalPoints}`);
    console.log(`Average points: ${averageTournamentPoints}`);
    console.log(`${percentWin}%`);

}
tennisCompetition(["5", "1400", "F", "SF", "W", "W", "SF"])
tennisCompetition(["4", "750", "SF", "W", "SF", "W"])
tennisCompetition(["7", "1200", "SF", "F", "W", "F", "W", "SF", "W"])
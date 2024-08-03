function steps(input) {
    let index = 0;
    let command = input[index];
    index++;
    
    totalSteps = 0;
    
    while (command !== "Going home"){
        let steps = Number(command);
        totalSteps += steps;

        if (totalSteps >= 10000) {
            console.log(`Goal reached! Good job!`);
            console.log(`${totalSteps - 10000} steps over the goal!`);
            break;
        }

        command = input[index];
        index++;
    }

    if (command === "Going home") {
        let stepsGoingHome = Number(input[index]);
        totalSteps += stepsGoingHome;
        
        if (totalSteps >= 10000) {
            console.log(`Goal reached! Good job!`);
            console.log(`${totalSteps - 10000} steps over the goal!`);
        } else {
            console.log(`${10000 - totalSteps} more steps to reach goal.`);
        }
    }
}

steps(["1000", "1500", "2000", "6500"])
steps(["1500", "300", "2500", "3000", "Going home", "200"])
steps(["1500", "3000", "250", "1548", "2000", "Going home", "2000"])
steps(["125", "250", "4000", "30", "2678", "4682"])
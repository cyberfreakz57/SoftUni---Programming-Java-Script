function processor(input) {

    let processorsToMake = Number(input[0]);
    let workers = Number(input[1]);
    let workingDays = Number(input[2]);

    let timePerProcessor = 3;
    let workingHours = 8;
    let processorsPrice = 110.10;

    let totalHours = workingHours * workingDays * workers;
    let processorsMade = Math.floor(totalHours / timePerProcessor);

    let profit = (processorsMade - processorsToMake) * processorsPrice;
    let losses = (processorsToMake - processorsMade) * processorsPrice;


    if (processorsMade < processorsToMake) {
        console.log(`Losses: -> ${losses.toFixed(2)} BGN`);
    } else {
        console.log(`Profit: -> ${profit.toFixed(2)} BGN`);
    }

}
processor(["500", "8", "20"])
processor(["150", "7", "18"])

function moon(input) {

    let avgSpeed = Number(input[0]);
    let fuelPer100Km = Number(input[1]);

    let distance = 384400;
    let totalDistance = distance * 2;
    let timeOnMoon = 3

    let time = Math.ceil(totalDistance / avgSpeed);
    
    let totalTime = time + timeOnMoon;

    let fuel = (fuelPer100Km * totalDistance) / 100;

    console.log(totalTime);
    console.log(fuel);
}
moon(['10000', '5'])
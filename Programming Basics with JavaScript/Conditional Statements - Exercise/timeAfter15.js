function timeAfter15(input) {
    let inHrs = Number(input[0]);
    let inMins = Number(input[1]);

    let totalTime = ((inHrs * 60) + inMins) + 15;
    
    let hours = Math.floor(totalTime / 60);
    let minutes = totalTime % 60;

    if (minutes > 59) {
        hours += 1;
        minutes = 0;
    } 
    if (hours > 23) {
        hours = 0;
    } 
    if (minutes < 10) {
        console.log(`${hours}:0${minutes}`);
    } else {
        console.log(`${hours}:${minutes}`);
    }
}
timeAfter15(["1","46"])
timeAfter15(["0","01"])
timeAfter15(["11","23"])
timeAfter15(["23","59"])
timeAfter15(["12","49"])
timeAfter15(["23","45"])
timeAfter15(["23","46"])
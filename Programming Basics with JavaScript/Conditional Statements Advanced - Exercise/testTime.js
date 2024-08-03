function testTime(input) {
    let hourOfTest = Number(input[0]);
    let minutesOfTest = Number(input[1]);
    let hourOfArrival = Number(input[2]);
    let minutesOfArrival = Number(input[3]);

    let timeOfTest = (hourOfTest * 60) + minutesOfTest;
    let arrivalTime = (hourOfArrival * 60) + minutesOfArrival;

    let timeDifference = Math.abs(arrivalTime - timeOfTest);
    let hoursDifference = Math.floor(timeDifference / 60);
    let minutesDifference = timeDifference % 60;


    if (timeOfTest === arrivalTime){
        console.log("On time");
    } else if (timeOfTest < arrivalTime){
        console.log("Late");

        if (timeDifference < 60){
            console.log(`${timeDifference} minutes after the start`);
        } else {
            if (minutesDifference < 10){
                console.log(`${hoursDifference}:0${minutesDifference} hours after the start`);
            } else {
                console.log(`${hoursDifference}:${minutesDifference} hours after the start`);
            }
        }
    } else {
        if (timeDifference <= 30) {
            console.log("On time");
            console.log(`${timeDifference} minutes before the start`);
        } else {
            console.log("Early");
            if (timeDifference < 60){
                console.log(`${timeDifference} minutes before the start`);
            } else {
                if (minutesDifference < 10){
                    console.log(`${hoursDifference}:0${minutesDifference} hours before the start`);
                } else {
                    console.log(`${hoursDifference}:${minutesDifference} hours before the start`);
                }
            }
        }
    }

}

testTime(["9", "30", "9", "50"])
testTime(["9", "00", "8", "30"])
testTime(["16", "00", "15", "00"])
testTime(["9", "00", "10", "30"])
testTime(["14", "00", "13", "55"])
testTime(["11", "30", "8", "12"])
testTime(["10", "00", "10", "00"])
testTime(["11", "30", "10", "55"])
testTime(["11", "30", "12", "29"])
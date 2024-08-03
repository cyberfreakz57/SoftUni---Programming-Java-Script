function workingTime(input) {
    let hour = Number(input[0]);
    let day = input[1];
    
    if (day === "Sunday" || hour < 10 || hour > 18) {
        console.log("closed");
    } else {
        console.log("open");
    }
}
workingTime(["21", "Saturday"]);
workingTime(["19", "Friday"]);
workingTime(["11", "Sunday"]);
workingTime(["11", "Monday"]);

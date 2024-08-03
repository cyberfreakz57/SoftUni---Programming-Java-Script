function whichDay(input) {
    let day = input[0];
    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            console.log("Working day");
            break;
        case "Saturday":
        case "Sunday":
            console.log("Weekend");
            break;
        default:
            console.log("Error");
            break;
    }
}
whichDay(["Monday"]);
whichDay(["Tuesday"]);
whichDay(["Saturday"]);
whichDay(["Wednesday"]);
whichDay(["Sunday"]);
whichDay(["Thursday"]);
whichDay(["Friday"]);
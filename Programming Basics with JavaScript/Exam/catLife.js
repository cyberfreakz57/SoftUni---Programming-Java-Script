function catLife(input) {
    let catBreed = input[0];
    let catSex = input[1];
    let catYears = 0;

    switch (catBreed) {
        case "British Shorthair":
            if (catSex === "m") {
                catYears = 13;
            } else {
                catYears = 14;
            }
            break;
        case "Siamese":
            if (catSex === "m") {
                catYears = 15;
            } else {
                catYears = 16;
            }
            break;
        case "Persian":
            if (catSex === "m") {
                catYears = 14;
            } else {
                catYears = 15;
            }
            break;
        case "Ragdoll":
            if (catSex === "m") {
                catYears = 16;
            } else {
                catYears = 17;
            }
            break;
        case "American Shorthair":
            if (catSex === "m") {
                catYears = 12;
            } else {
                catYears = 13;
            }
            break;
        case "Siberian":
            if (catSex === "m") {
                catYears = 11;
            } else {
                catYears = 12;
            }
            break;
    }
    if (catBreed !== "British Shorthair" && catBreed !== "Siamese" && catBreed !== "Persian" && catBreed !== "Ragdoll" && catBreed !== "American Shorthair" && catBreed !== "Siberian") {
        console.log(`${catBreed} is invalid cat!`);
    } else {
            
            let catAge = catYears * 12;
            let catMonths = catAge / 6;
            console.log(`${catMonths} cat months`);
    }
}
catLife(["Persian", "m"])


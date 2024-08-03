function summerOutfit(input) {
    let degrees = Number(input[0]);
    let timeOfDay = input[1];
    let outfit;
    let shoes;


    if (timeOfDay === "Morning") {
        if (degrees >= 10 && degrees <= 18) {
            outfit = "Sweatshirt";
            shoes = "Sneakers";
        } else if (degrees > 18 && degrees <= 24) {
            outfit = "Shirt";
            shoes = "Moccasins";
        } else if (degrees >= 25) {
            outfit = "T-Shirt";
            shoes = "Sandals";
        }
        console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
    } else if (timeOfDay === "Afternoon") {
        if (degrees >= 10 && degrees <= 18) {
            outfit = "Shirt";
            shoes = "Moccasins";
        } else if (degrees > 18 && degrees <= 24) {
            outfit = "T-Shirt";
            shoes = "Sandals";
        } else if (degrees >= 25) {
            outfit = "Swim Suit";
            shoes = "Barefoot";
        }
        console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
    } else if (timeOfDay === "Evening") {
        if (degrees >= 10 && degrees <= 18) {
            outfit = "Shirt";
            shoes = "Moccasins";
        } else if (degrees > 18 && degrees <= 24) {
            outfit = "Shirt";
            shoes = "Moccasins";
        } else if (degrees >= 25) {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
        console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
    }
}
summerOutfit(["16", "Morning"]);
summerOutfit(["22", "Afternoon"]);


function summerOutfit2(input) {
    let degrees = Number(input[0]);
    let timeOfDay = input[1];
    let outfit;
    let shoes;

    if (degrees >= 10 && degrees <= 18) {
        if (timeOfDay === "Morning") {
            outfit = "Sweatshirt";
            shoes = "Sneakers";
        } else if (timeOfDay === "Evening"  || timeOfDay === "Afternoon") {
            outfit = "Shirt";
            shoes = "Moccasins";
        } 
        console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
    } else if (degrees > 18 && degrees <= 24) {
        if (timeOfDay === "Morning"  || timeOfDay === "Evening") {
            outfit = "Shirt";
            shoes = "Moccasins";
        } else if (timeOfDay === "Afternoon") {
            outfit = "T-Shirt";
            shoes = "Sandals";
        }
        console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
    } else if (degrees >= 25) {
        if (timeOfDay === "Morning") {
            outfit = "T-Shirt";
            shoes = "Sandals";
        } else if (timeOfDay === "Afternoon") {
            outfit = "Swim Suit";
            shoes = "Barefoot";
        } else if (timeOfDay === "Evening") {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
        console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
    }
}
summerOutfit2(["16", "Morning"])
summerOutfit2(["22", "Afternoon"]);
summerOutfit2(["28", "Evening"]);
function journey(input) {

    let budget = Number(input[0]);
    let season = input[1];

    let destination = "";
    let typeOfHousing = "";
    let allowance = 0;

    if (budget <= 100) {
        destination = "Bulgaria";
        if (season === "summer") {
            typeOfHousing = "Camp";
            allowance = budget * 0.3;
        } else if (season === "winter") {
            typeOfHousing = "Hotel";
            allowance = budget * 0.7;
        }

    } else if (budget <= 1000) {
        destination = "Balkans";
        if (season === "summer") {
            typeOfHousing = "Camp";
            allowance = budget * 0.4;
        } else if (season === "winter") {
            typeOfHousing = "Hotel";
            allowance = budget * 0.8;
        }

    } else if (budget > 1000) {
        destination = "Europe";
        typeOfHousing = "Hotel";
        allowance = budget * 0.9;
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${typeOfHousing} - ${(allowance).toFixed(2)}`);   
}

journey(["50", "summer"])
journey(["75", "winter"])
journey(["312", "summer"])
journey(["678.53", "winter"])
journey(["1500", "summer"])






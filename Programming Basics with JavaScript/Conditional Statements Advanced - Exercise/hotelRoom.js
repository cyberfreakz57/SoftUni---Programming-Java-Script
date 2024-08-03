function bookRoom(input) {
    let month = input[0];
    let nights = Number(input[1]);

    let studioPrice = 0;
    let apartmentPrice = 0;
    let apartmentRent = 0;
    let studioRent = 0;

    switch (month) {
        case "May":
        case "October":
            studioPrice = 50;
            apartmentPrice = 65;

            studioRent = studioPrice * nights;
            apartmentRent = apartmentPrice * nights;

            if (nights > 14) {
                studioRent *= 0.70
                apartmentRent *= 0.90
            } else if (nights > 7) {
                studioRent *= 0.95;
            }
            break;
        case "June":
        case "September":
            studioPrice = 75.20;
            apartmentPrice = 68.70;

            studioRent = studioPrice * nights;
            apartmentRent = apartmentPrice * nights;

            if (nights > 14) {
                studioRent *= 0.80;
                apartmentRent *= 0.90;
            }
            break;
        case "July":
        case "August":
            studioPrice = 76;
            apartmentPrice = 77;

            studioRent = studioPrice * nights;
            apartmentRent = apartmentPrice * nights;

            if (nights > 14) {
                apartmentRent *= 0.90;
            }
            break;
        }
        console.log(`Apartment: ${(apartmentRent).toFixed(2)} lv.`);
        console.log(`Studio: ${(studioRent).toFixed(2)} lv.`);
}

bookRoom(["May", "15"]);
bookRoom(["June", "14"]);
bookRoom(["August", "20"]);
bookRoom(["July", "22"]);
bookRoom(["September", "10"]);
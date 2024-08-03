function skiTrip(input){
    let days = Number(input[0]);
    let roomType = input[1];
    let feedback = input[2];

    let discountPrice = 0;
    let finalPrice = 0;
    let roomPrice = 0;
    let nights = days - 1;


    switch(roomType){
        case "room for one person":
            roomPrice = nights * 18;
            break;
        case "apartment":
            roomPrice = nights * 25;
            break;
        case "president apartment":
            roomPrice = nights * 35;
            break;
    }
    
    if (days < 10){
        if (roomType === "room for one person"){
            discountPrice = roomPrice
        } else if (roomType === "apartment"){
            discountPrice = roomPrice * 0.70;
        } else if (roomType === "president apartment"){
            discountPrice = roomPrice * 0.90;
        }

    } else if (days === 10 || days <= 15){
        if (roomType === "room for one person"){
            discountPrice = roomPrice
        } else if (roomType === "apartment"){
            discountPrice = roomPrice * 0.65;
        } else if (roomType === "president apartment"){
            discountPrice = roomPrice * 0.85;
        }

    }  else {
        if (roomType === "room for one person"){
            discountPrice = roomPrice
        } else if (roomType === "apartment"){
            discountPrice = roomPrice * 0.50;
        } else if (roomType === "president apartment"){
            discountPrice = roomPrice * 0.80;
        }
    }
    if (feedback === "positive"){
        finalPrice = discountPrice * 1.25;
    } else if (feedback === "negative"){
        finalPrice = discountPrice * 0.90;
    }
    console.log(finalPrice.toFixed(2));
}

skiTrip(["14", "apartment", "positive"])
skiTrip(["30", "president apartment", "negative"])
skiTrip(["12", "room for one person", "positive"])
skiTrip(["2", "apartment", "positive"])
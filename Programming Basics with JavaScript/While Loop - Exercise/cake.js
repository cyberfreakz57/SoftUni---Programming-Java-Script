function cake(input) {
    let cakeHeight = Number(input[0]);
    let cakeWidth = Number(input[1]);

    let cakeArea = cakeHeight * cakeWidth;

    console.log(cakeArea);
}
cake(["10", "10", "20", "20", "20", "20", "21"]);
cake(["10", "2", "2", "4", "6", "STOP"]);

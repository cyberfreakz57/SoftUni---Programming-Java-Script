function aquarium(input) {
    let length = Number(input[0]);
    let width = Number(input[2]);
    let height = Number(input[1]);
    let takenVolume = Number(input[3]);
    
    let percents = takenVolume / 100; 
    // let percents = takenVolume * 0.01
    
    let volume = length * width * height;
    let volumeInLitres = volume / 1000; 
    // let volumeInLitres = volume * 0.001

    let neededLitres = volumeInLitres * (1 - percents);
    
    console.log(neededLitres);
}
aquarium(['85', '75', '47', '17']);

function aquarium2(input) {
    let length = Number(input[0]);
    let width = Number(input[2]);
    let height = Number(input[1]);
    let takenVolume = Number(input[3]);
    let percents = takenVolume / 100;

    let volume = length * width * height;
    let volumeInLitres = volume / 1000;

    let neededLitres = volumeInLitres * (1 - percents);

    console.log(neededLitres);
}
aquarium2(['105', '77', '89', '18.5']);
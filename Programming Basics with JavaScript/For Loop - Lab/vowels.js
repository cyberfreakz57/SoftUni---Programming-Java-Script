function vowels(input) {

    let text = input[0];
    let sum = 0;

    for (let index = 0; index < text.length; index++ ){
        let currentSymbol = text[index];

        switch (currentSymbol){
        case 'a':sum += 1;break;
        case 'e':sum += 2;break;
        case 'i':sum += 3;break;
        case 'o':sum += 4;break;
        case 'u':sum += 5;break;
        }
    }
    console.log(sum);

}
vowels(['bamboo']);
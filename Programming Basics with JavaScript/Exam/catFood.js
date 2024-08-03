function catFood(input) {
    let catsAmount = Number(input[0]);
    let catFoodPricePerKg = 12.45;

    let smallCats = 0;
    let bigCats = 0;
    let largeCats = 0;
    let food = 0;
    let foodEaten = 0;
    
    for (let i = 1; i <= catsAmount; i++) {
        let foodEaten = Number(input[i]);
        if (foodEaten >= 100 && foodEaten < 200) {
            smallCats++;
        } else if (foodEaten >= 200 && foodEaten < 300) {
            bigCats++;
        } else if(foodEaten >= 300 && foodEaten <= 400){
            largeCats++;
        }
        food += foodEaten;
    }
    let totalFoodPrice = (food / 1000) * catFoodPricePerKg;
    console.log(`Group 1: ${smallCats} cats.`)
    console.log(`Group 2: ${bigCats} cats.`);
    console.log(`Group 3: ${largeCats} cats.`)
    console.log(`Price for food per day: ${totalFoodPrice.toFixed(2)} lv.`);
}

catFood(["6", "102", "236", "123", "399", "342", "222"])
// catFood(["10", "256", "348", "198", "322", "186", "294", "321", "100", "200", "300"])
// catFood(["7", "100", "200", "342", "300", "234", "123", "212"])
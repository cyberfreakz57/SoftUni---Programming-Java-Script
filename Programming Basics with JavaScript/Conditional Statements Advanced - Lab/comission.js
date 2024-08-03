function comission(input) {
    let town = input[0];
    let sales = Number(input[1]);

    if (town === 'Sofia') {
        if (sales >= 0 && sales <= 500){
            console.log((sales * 0.05).toFixed(2));
        } else if (sales > 500 && sales <= 1000) {
            console.log((sales * 0.07).toFixed(2));
        } else if (sales > 1000 && sales <= 10000) {
            console.log((sales * 0.08).toFixed(2));
        } else if (sales > 10000) {
            console.log((sales * 0.12).toFixed(2));
        } else {
            console.log('error');
        }
    } else if (town === 'Varna') {
        if (sales >= 0 && sales <= 500){
            console.log((sales * 0.045).toFixed(2));
        } else if (sales > 500 && sales <= 1000) {
            console.log((sales * 0.075).toFixed(2));
        } else if (sales > 1000 && sales <= 10000) {
            console.log((sales * 0.1).toFixed(2));
        } else if (sales > 10000) {
            console.log((sales * 0.13).toFixed(2));
        } else {
            console.log('error');
        }
    } else if (town === 'Plovdiv') {
        if (sales >= 0 && sales <= 500){
            console.log((sales * 0.055).toFixed(2));
        } else if (sales > 500 && sales <= 1000) {
            console.log((sales * 0.08).toFixed(2));
        } else if (sales > 1000 && sales <= 10000) {
            console.log((sales * 0.12).toFixed(2));
        } else if (sales > 10000) {
            console.log((sales * 0.145).toFixed(2));
        } else {
            console.log('error');
        } 
    } else {
        console.log('error');
    }
}
comission(["Sofia", "1500"])
comission(["Plovdiv", "499.99"])
comission(["Varna", "3874.50"])
comission(["Kaspichan", "-50"])
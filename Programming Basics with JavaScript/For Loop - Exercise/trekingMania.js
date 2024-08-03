function climbMania(input) {
    let numGroups = Number(input[0]);
    let totalPeople = 0;

    let musala = 0;
    let monblan = 0;
    let kilimandjaro = 0;
    let k2 = 0;
    let everest = 0;
    
    let percentMusala = 0;
    let percentMonblan = 0;
    let percentKilimandjaro = 0;
    let percentK2 = 0;
    let percentEverest = 0;
    

    for(let i = 1; i <= numGroups; i++){
        let people = Number(input[i]);
        totalPeople += people;

        if (people <= 5) {
            musala += people;
        } else if (people <=12) {
            monblan += people;
        } else if (people <= 25) {
            kilimandjaro += people;
        } else if (people <= 40) {
            k2 += people;
        } else if (people > 40) {
            everest += people;
        }
        percentMusala = ((musala / totalPeople) * 100).toFixed(2);
        percentMonblan = ((monblan / totalPeople) * 100).toFixed(2);
        percentKilimandjaro = ((kilimandjaro / totalPeople) * 100).toFixed(2);
        percentK2 = ((k2 / totalPeople) * 100).toFixed(2);
        percentEverest = ((everest / totalPeople) * 100).toFixed(2);
        
    }
    console.log(`${percentMusala}%`);
    console.log(`${percentMonblan}%`);
    console.log(`${percentKilimandjaro}%`);
    console.log(`${percentK2}%`);
    console.log(`${percentEverest}%`);
}
climbMania(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"])
climbMania(["5", "25", "41", "31", "250", "6"])

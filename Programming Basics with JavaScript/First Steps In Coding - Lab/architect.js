function architect(input) {
    let name = input[0];
    let projects = Number(input[1]);
    let hours = projects * 3;
    console.log(`The architect ${name} will need ${hours} hours to complete ${projects} project/s.`);
}
architect(["Tihomir", "4"])
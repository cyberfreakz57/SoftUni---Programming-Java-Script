function graduation(input) {
    let name = input[0];
    let grades = 1;

    let sum = 0;
    let failed = 0;
    let index = 0;

    while (grades <= 12) {
        index++;
        let grade = Number(input[index]);

        if (grade < 4) {
            failed++;
            if (failed > 1) {
                console.log(`${name} has been excluded at ${grades} grade`);
                return;
            }
            continue;
        }
        sum += grade;
        grades++;
    }
    let averageGrade = sum / 12;
    console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`);
}
graduation(["Gosho", "5", "5.5", "6", "5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"])
graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"])

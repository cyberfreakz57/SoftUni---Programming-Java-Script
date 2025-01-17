function prepExam(input) {
    let maxBadGrades = Number(input[0]);

    let index = 1;
    let command = input[index]
    index++;

    let grade = Number(input[index]);
    index++;

    let badGrades = 0;
    let gradeSum = 0;
    let gradeCount = 0;
    let lastProblem = '';


    while (command !== "Enough") {
        lastProblem = command;

        if (grade <= 4) {
            badGrades++;
        }

        if (badGrades === maxBadGrades) {
            console.log(`You need a break, ${badGrades} poor grades.`);
            break;
        }

        gradeCount++;
        gradeSum += grade;

        command = input[index];
        index++;

        grade = Number(input[index]);
        index++;

    }

    if (command === "Enough") {
        let averageGrade = gradeSum / gradeCount;
        console.log(`Average score: ${averageGrade.toFixed(2)}`);
        console.log(`Number of problems: ${gradeCount}`);
        console.log(`Last problem: ${lastProblem}`);
    }
}
prepExam(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"])
prepExam(["2", "Income", "3", "Game Info", "6", "Best Player", "4"]);
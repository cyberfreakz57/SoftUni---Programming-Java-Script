function isBonusPointAdded(input) {
    let initPoints = Number(input[0]);
    let bonus = 0;
    if (initPoints <= 100) {
        bonus = 5;    
    } else if (initPoints <= 1000) {
        bonus = 0.2 * initPoints;
    } else {
        bonus = 0.1 *  initPoints;
    }
    if (initPoints % 2 === 0) {
        bonus += 1;
    } else if (initPoints % 10 == 5) {
        bonus += 2;
    }
console.log(bonus);
console.log(initPoints + bonus);
    
}
isBonusPointAdded(["20"])
isBonusPointAdded(["175"])
isBonusPointAdded(["2703"])
isBonusPointAdded(["15875"])
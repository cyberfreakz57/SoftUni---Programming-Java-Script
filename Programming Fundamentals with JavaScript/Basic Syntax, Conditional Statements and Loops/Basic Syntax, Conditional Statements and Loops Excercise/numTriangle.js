function printTriangle(n) {
    for (let i = 1; i <= n; i++) {
        let triangleNum = "";
        for (let j = 1; j <= i; j++) {
            triangleNum += i + " ";
        }
        console.log(triangleNum);
    }
}
printTriangle([5]);
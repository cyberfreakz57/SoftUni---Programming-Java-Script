function isShapeArea(input) {
let figure = input[0]
    if (figure === "square"){
        let side = Number(input[1])
        let area = (side * side)
        console.log(area.toFixed(3));
    }else if (figure === "rectangle"){
        let side = Number(input[1])
        let side2 = Number(input[2])
        let perimeter = (side * side2)
        console.log(perimeter.toFixed(3));
    }else if (figure === "circle"){
        let radius = Number(input[1])
        let diameter = (radius * radius * Math.PI)
        console.log(diameter.toFixed(3));
    }else if (figure === "triangle"){
        let side = Number(input[1])
        let height = Number(input[2])
        let face = ((side * height) / 2)
        console.log(face.toFixed(3));
    }
}
function isShapeArea(input) {
    let figure = input[0];
    let area = 0;
    if (figure === "square"){
        let a = Number(input[1])
        area = (a * a)
        console.log(area.toFixed(3));
    }else if (figure === "rectangle"){
        let a = Number(input[1])
        let b = Number(input[2])
        area = (a * b)
        console.log(area.toFixed(3));
    }else if (figure === "circle"){
        let radius = Number(input[1])
        area = (radius * radius * Math.PI)
        console.log(area.toFixed(3));
    }else if (figure === "triangle"){
        let a = Number(input[1])
        let ha = Number(input[2])
        area = ((a * ha) / 2)
        console.log(area.toFixed(3));
    }
}
isShapeArea(["square", "5"])
isShapeArea(["rectangle", "7", "2.5"])
isShapeArea(["circle", "6"])
isShapeArea(["triangle", "4.5", "20"])


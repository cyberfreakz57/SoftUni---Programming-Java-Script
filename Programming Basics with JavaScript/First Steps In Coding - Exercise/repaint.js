function repaint(input){
    let tarp = (Number(input[0]) + 2) * 1.50 ;
    let paint =(Number(input[1]) + (Number(input[1]) * 0.1)) * 14.50;
    let thinner = Number(input[2]) * 5;
    let bags = 0.40;
    let materials = tarp + paint + thinner + bags;
    let workers = (materials * 0.30) * Number(input[3]);
    let toRepaint = materials + workers
    console.log(toRepaint)
}
repaint(["10", "11", "4", "8"])
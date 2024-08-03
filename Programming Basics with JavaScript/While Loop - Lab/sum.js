function sum(input){
    let range = Number(input[0]);
    let num = Number(input[1]);
    let sum = 0;
    let index = 1;

    while (range > sum) {
        sum += num;
        index++;
        num = Number(input[index]);
    }
    console.log(sum);


}
sum(["100", "10", "20", "30", "40"])
sum(["20", "1", "2", "3", "4", "5", "6"])
function sequence2k1(input) {
    let num = Number(input[0]);
    let counter = 1;

    while (counter <= num) {
        console.log(counter);
        counter++;
        counter = (counter * 2) - 1;
    }
}
sequence2k1(["3"]);
sequence2k1(["8"]);
sequence2k1(["17"]);
sequence2k1(["31"]);

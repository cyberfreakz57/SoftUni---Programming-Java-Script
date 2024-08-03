function library(input) {
    let favBook = input[0];
    let index = 1;

    let nextBookName = input[index];
    while (nextBookName !== "No More Books") {
        if (nextBookName === favBook) {
            break;
        }
        index++;
        nextBookName = input[index];
    }
    if (nextBookName === "No More Books") {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${index - 1} books.`);
    } else {
        console.log(`You checked ${index - 1} books and found it.`);
    }
}

library(["Troy", "Stronger", "Life Style", "Troy"])
library(["The Spot", "Hunger Games", "Harry Potter", "Torronto", "Spotify", "No More Books"])
library(["Bourne", "True Story", "Forever", "More Space", "The Girl", "Spaceship", "Strongest", "Profit", "Tripple", "Stella", "The Matrix", "Bourne"])
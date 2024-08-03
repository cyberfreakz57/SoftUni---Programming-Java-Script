function isPassword(input) {   
    let password = input[0];
    if (password === "s3cr3t!P@ssw0rd"){
        console.log("Welcome");
    } else {
        console.log("Wrong password!");
    }
}
isPassword(["qwerty"]);
isPassword(["s3cr3t!P@ssw0rd"]);
isPassword(["s3cr3t!p@ss"]);
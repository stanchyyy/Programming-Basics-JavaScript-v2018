function PasswordGuess([in_Password]){
    const passPhrase = "s3cr3t!P@ssw0rd";
    if(in_Password===passPhrase){
        console.log("Welcome");
    }
    else{
        console.log("Wrong password!");
    }
}

PasswordGuess(["qwerty"]);
PasswordGuess(["s3cr3t!P@ssw0rd"]);
PasswordGuess(["s3cr3t!p@ss"]);
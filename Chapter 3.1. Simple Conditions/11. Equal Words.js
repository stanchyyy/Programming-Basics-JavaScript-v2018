function EqualWords([in_WordOne,in_WordTwo]){
    let wordOne = in_WordOne.toLowerCase();
    let wordTwo = in_WordTwo.toLowerCase();
    if(wordOne===wordTwo){
        console.log("yes")
    }
    else{
        console.log("no");
    }
}

EqualWords(["Hello","Hello"]);
EqualWords(["SoftUni","softuni"]);
EqualWords(["Soft","Uni"]);
EqualWords(["beer","vodka"]);
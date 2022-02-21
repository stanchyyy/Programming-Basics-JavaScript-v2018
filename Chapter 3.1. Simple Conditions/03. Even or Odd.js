function EvenOrOdd([number]){
    let givenNumber = parseInt(number);
    if(givenNumber % 2===0){
        console.log("even");
    }
    else{
        console.log("odd");
    }

}

EvenOrOdd([5]);
EvenOrOdd([4]);
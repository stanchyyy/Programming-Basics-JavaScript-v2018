function CelsiusToFarentheint([c]){
    let celsius = parseFloat(c);
    let farentheint =  (celsius*1.8) + 32;
    let farentheintRounded = farentheint.toFixed(2);
    console.log(farentheintRounded);
}

CelsiusToFarentheint([-5.5]);
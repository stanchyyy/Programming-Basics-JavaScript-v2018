function RadToDegrees([r]){
    let radians = parseFloat(r);
    let degrees = (180/Math.PI*radians);
    let degreesRounded = Math.round(degrees);
    console.log(degreesRounded);

}

RadToDegrees([3.1416]);
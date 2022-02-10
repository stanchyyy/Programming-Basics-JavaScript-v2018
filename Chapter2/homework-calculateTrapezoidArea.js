function calculateTrapezoidArea([b1,b2,h]){
    let sideB1 = parseFloat(b1);
    let sideB2 = parseFloat(b2);
    let heightH  = parseFloat(h);
    let area = (sideB1+sideB2) * (heightH / 2);
    console.log("Trapezoid area = "+ area);
}

calculateTrapezoidArea([8,13,7]);

function CircleAreaAndParameter([r]){
    let radius = parseFloat(r);
    let area = Math.PI*radius*radius;
    let perimeter = 2*Math.PI*radius;
    console.log(area);
    console.log(perimeter);
}

CircleAreaAndParameter([3]);
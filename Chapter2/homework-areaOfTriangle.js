function calculateSquareArea([a,h]){
    let sideA = parseFloat(a);
    let height = parseFloat(h);
    let area = (sideA*height)/2;
    let areaRounded = area.toFixed(2);
    console.log(areaRounded);
}

calculateSquareArea([7.75 , 8.45]);
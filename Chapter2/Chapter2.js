function calculateSquareArea (a){
    let side = parseInt(a);
    let area = a*a;
    console.log("Square area = "+area);
}

calculateSquareArea(3);

function convertInchesToCentimeters(b){
    let inches = parseFloat(b);
    let centimeters = inches*2.54;
    console.log(centimeters);
}

convertInchesToCentimeters(2);

function sayHello(c){
    console.log(`Hello ${c}.`);
}

sayHello("Stanislav Atanasov");

function printInfo(firstName, lastName, age, town){
    console.log(`Your are ${firstName} ${lastName} a ${age} years old person from ${town}.`);
}

printInfo("Stanislav","Atanasov",33,"Vidin");
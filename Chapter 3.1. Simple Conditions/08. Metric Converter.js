function MetricConverter([inputLenght,inputUnit,outputUnit]){
    let lenght = parseInt(inputLenght);
    let outUnit = outputUnit.toLowerCase();
    let inUnit = inputUnit.toLowerCase();
    //convert in unit to meters
    if(inUnit==="mm"){
        lenght/=1000;
    }
    if(inUnit==="cm"){
        lenght/=100;
    }
    if(inUnit==="mi"){
        lenght*=1609.344;
    }
    if(inUnit==="in"){
        lenght*=39.3700787;
    }
    if(inUnit==="km"){
        lenght*=1000;
    }
    if(inUnit==="ft"){
        lenght*=3.2808399;
    }
    if(inUnit==="yd"){
        lenght*=0.9144;
    }
    //convert meters to out unit
    if(outUnit==="mm"){
        lenght*=1000;
    }
    if(outUnit==="cm"){
        lenght*=100;
    }
    if(outUnit==="mi"){
        lenght/=0.0006213712;
    }
    if(outUnit==="in"){
        lenght*=39.3700787;
    }
    if(outUnit==="km"){
        lenght/=1000;
    }
    if(outUnit==="ft"){
        lenght*=3.2808399;
    }
    if(outUnit==="yd"){
        lenght/=1.0936133;
    }
    console.log(lenght+" "+ outUnit)

}

MetricConverter([450, "yd", "km"]);
MetricConverter([12, "km", "ft"]);
MetricConverter([150, "mi", "in"]);
  
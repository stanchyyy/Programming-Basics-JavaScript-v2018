function MetricConverter([inputLenght,inputUnit,outputUnit]){
    let lenght = parseFloat(inputLenght);
    let outUnit = outputUnit.toLowerCase();
    let inUnit = inputUnit.toLowerCase();
    //convert IN unit to meters
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
        lenght*= 0.0254;
    }
    if(inUnit==="km"){
        lenght*=1000;
    }
    if(inUnit==="ft"){
        lenght/=3.2808399;
    }
    if(inUnit==="yd"){
        lenght*= 0.9144;
    }
    if(outUnit==="mm"){
        lenght*=1000;
    }
    if(outUnit==="cm"){
        lenght*=100;
    }
    if(outUnit==="mi"){
        lenght*=0.000621371192;
    }
    if(outUnit==="in"){
        lenght*=39.3700787;
    }
    if(outUnit==="km"){
        lenght*=0.001;
    }
    if(outUnit==="ft"){
        lenght*=3.2808399;
    }
    if(outUnit==="yd"){
        lenght*= 1.0936133;
    }
    console.log(lenght+" "+ outUnit)

}

MetricConverter([1, "m", "m"]);
MetricConverter([1, "m", "mm"]);
MetricConverter([1, "m", "cm"]);
MetricConverter([1, "m", "mi"]);
MetricConverter([1, "m", "in"]);
MetricConverter([1, "m", "km"]);
MetricConverter([1, "m", "ft"]);
MetricConverter([1, "m", "yd"]);



MetricConverter([1, "mm", "m"]);
MetricConverter([1, "cm", "m"]);
MetricConverter([1, "mi", "m"]);
MetricConverter([1, "in", "m"]);
MetricConverter([1, "km", "m"]);
MetricConverter([1, "ft", "m"]);
MetricConverter([1, "yd", "m"]);
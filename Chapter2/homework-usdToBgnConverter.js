function UsdToBgnConverter([usd]){
    let unitedStatesDolars = parseFloat(usd);
    const exchangeRate = 1.79549;
    let convertedNumber = unitedStatesDolars*exchangeRate;
    let convertedNumberRounded = convertedNumber.toFixed(2);
    console.log(convertedNumberRounded);

}

UsdToBgnConverter([20]);
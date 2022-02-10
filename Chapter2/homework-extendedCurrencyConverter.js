function UsdToBgnConverter([amount,inputCurrency,outputCurrency]){
    let convertionRates = {
        "BGN": 1,
        "USD": 1.79549,
        "EUR": 1.95583,
        "GBP": 2.53405
    };

    let inputAmountToBgn = amount*convertionRates[inputCurrency];
    let outputCurrencyAmount = inputAmountToBgn / convertionRates[outputCurrency];
    console.log(outputCurrencyAmount);

}

UsdToBgnConverter([20,"USD","BGN"]);
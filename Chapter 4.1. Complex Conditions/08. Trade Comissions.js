function TradeComissions([arg_city,arg_sales]){
    let city = arg_city.toLowerCase();
    let sales = Number(arg_sales);
    let comission;
    let errorOutput = "error"
    let result;

    if(sales >=0 && sales<= 500){
        if(city==="sofia"){
            comission = 5;
        }
        else if(city==="varna"){
            comission = 4.5;
        }
        else if(city==="plovdiv"){
            comission = 5.5;
        }
        else{
            result=errorOutput;
        }

    }
    else if (sales > 500 && sales<= 1000){
        if(city==="sofia"){
            comission = 7;
        }
        else if(city==="varna"){
            comission = 7.5;
        }
        else if(city==="plovdiv"){
            comission = 8;
        }
        else{
            result=errorOutput;
        }
        
    }
    else if (sales > 1000 && sales<= 10000){
        if(city==="sofia"){
            comission = 8;
        }
        else if(city==="varna"){
            comission = 10;
        }
        else if(city==="plovdiv"){
            comission = 12;
        }
        else{
            result=errorOutput;
        }
        
    }
    else if (sales > 10000 ){
        if(city==="sofia"){
            comission = 12;
        }
        else if(city==="varna"){
            comission = 13;
        }
        else if(city==="plovdiv"){
            comission = 14.5;
        }
        else{
            result=errorOutput;
        }
        
    }
    else{
        result=errorOutput;
    }
    if(result!=errorOutput){
        result=(comission*sales/100).toFixed(2);
    }
    console.log(result);
}

TradeComissions(["Sofia", 1500]);
TradeComissions(["Plovdiv", 499.99]);
TradeComissions(["Kaspichan", -50]);

/*
Пример: търговски комисионни
Фирма дава следните комисионни на търговците си според града, в който работят и обема на продажбите s: Град 0 <= s <= 500 500 < s <= 1000 1000 < s <= 10000 s > 10000 Sofia Varna Plovdiv 5% 4.5% 5.5% 7% 7.5% 8% 8% 10% 12% 12% 13% 14.5%
Напишете програма, която чете име на град (стринг) и обем на продажбите (десетично число) и изчислява размера на комисионната. Резултатът да се изведе закръглен с 2 десетични цифри след десетичния знак. При невалиден град или обем на продажбите (отрицателно число) да се отпечата "error".
Примерен вход и изход
Вход Sofia 1500  Изход 120.00
Вход Plovdiv 499.99  Изход 27.50
Вход Kaspichan -50  Изход error

*/
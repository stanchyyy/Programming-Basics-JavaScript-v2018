function FruitShop([arg_product,arg_day,arg_quantity]){
    let product = arg_product.toLowerCase();
    let day = arg_day.toLowerCase();
    let quantity = Number(arg_quantity);
    let result;

    if(day==="saturday" || day==="sunday"){
        let banana = 2.70;
        let apple = 1.25;
        let orange = 0.90;
        let grapefruit = 1.60;
        let kiwi = 3.00;
        let pineapple =  5.60;
        let grapes = 4.20;

        if(product ==="banana"){
            result=quantity*banana;
        }
        else if(product==="apple"){
            result=quantity*apple;
        }
        else if(product==="orange"){
            result=quantity*orange;
        }
        else if(product==="grapefruit"){
            result=quantity*grapefruit;
        }
        else if(product==="kiwi"){
            result=quantity*kiwi;
        }
        else if(product==="pineapple"){
            result=quantity*pineapple;
        }
        else if(product==="grapes"){
            result=quantity*grapes;
        }
        else{
            result="error";
        } 
    }

    else if(day==="monday" || day==="tuesday"|| day==="wednesday" || day==="thursday" || day==="friday"){
        let banana = 2.50;
        let apple = 1.20;
        let orange = 0.85;
        let grapefruit = 1.45;
        let kiwi = 2.70;
        let pineapple =  5.50;
        let grapes = 3.85;

        if(product ==="banana"){
            result=quantity*banana;
        }
        else if(product==="apple"){
            result=quantity*apple;
        }
        else if(product==="orange"){
            result=quantity*orange;
        }
        else if(product==="grapefruit"){
            result=quantity*grapefruit;
        }
        else if(product==="kiwi"){
            result=quantity*kiwi;
        }
        else if(product==="pineapple"){
            result=quantity*pineapple;
        }
        else if(product==="grapes"){
            result=quantity*grapes;
        }
        else{
            result="error";
        }
    }
    else{
        result="error";
    }
    if(result!="error"){
        result = result.toFixed(2);
    }
    console.log(result);

}


FruitShop(["orange", "Sunday", 3]);
FruitShop(["kiwi", "Monday", 2.5]);
FruitShop(["grapes", "Saturday", 0.5]);
FruitShop(["tomato", "Monday", 0.5]);


/*
Пример: магазин за плодове
Магазин за плодове в работни дни продава на следните цени: Плод Цена banana apple orange grapefruit kiwi pineapple grapes 2.50 1.20 0.85 1.45 2.70 5.50 3.85
В почивни дни цените са по-високи: Плод Цена banana apple orange grapefruit kiwi pineapple grapes 2.70 1.25 0.90 1.60 3.00 5.60 4.20

Напишете програма, която чете от конзолата плод (banana / apple / …), ден от седмицата (Monday / Tuesday / …) и количество (десетично число) и7
 пресмята цената според цените от таблиците по-горе. Резултатът да се отпечата закръглен с 2 цифри след десетичния знак.
  При невалиден ден от седмицата или невалидно имена плод да се отпечата “error”.
Примерен вход и изход
Вход  orange Sunday 3 Изход 2.70
Вход   kiwi Monday 2.5 Изход  6.75
Вход grapes Saturday 0.5 Изход 2.10
Вход tomato Monday 0.5  Изход error
   
*/
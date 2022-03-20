function TransportPrice([argDistance,argTimeOfTheDay]){
    let distance = parseInt(argDistance);
    let timeOfTheDay = argTimeOfTheDay;
    let priceOfTravel;
    
    
    //Train properties
    let trainPrice = 0.06;
    let trainMinimumDistance = 100;

    //Bus properties
    let busPrice = 0.09;
    let busMinimumDistance = 20;

    //Taxi properties
    let taxiDayPrice = 0.79;
    let taxiNightPrice = 0.90;
    let taxiStartPrice = 0.70;
    let taxiTariff;

    if(timeOfTheDay==="day"){
        taxiTariff = taxiDayPrice;
    }
    else{
        taxiTariff = taxiNightPrice;
    }

    if(distance>=trainMinimumDistance){
        priceOfTravel = distance*trainPrice;
    }
    else if(distance>=busMinimumDistance){
        priceOfTravel = distance*busPrice;
    }
    else{
        priceOfTravel = taxiTariff*distance+taxiStartPrice;
    }

    console.log(priceOfTravel.toFixed(2));

}

TransportPrice([5, "day"]);
TransportPrice([7, "night"]);
TransportPrice([25, "day"]);
TransportPrice([180, "night"]);

/*
Задача: цена за транспорт
Студент трябва да пропътува n километра. Той има избор измежду три вида транспорт:
• Такси. Начална такса: 0.70 лв. Дневна тарифа: 0.79 лв./км. Нощна тарифа: 0.90 лв./км.
• Автобус. Дневна / нощна тарифа: 0.09 лв./км. Може да се използва за разстояния минимум 20 км.
• Влак. Дневна / нощна тарифа: 0.06 лв./км. Може да се използва за разстояния минимум 100 км.
Напишете програма, която въвежда броя километри n и период от деня (ден или нощ) и изчислява цената на най-евтиния транспорт.
Входни данни

Програмата чета два реда (аргумента):
• Първият ред (аргумент) съдържа числото n – брой километри – цяло число в интервала [1 … 5000].
• Вторият ред (аргумент) съдържа дума "day" или "night" – пътуване през деня или през нощта.
Изходни данни
Да се отпечата на конзолата най-ниската цена за посочения брой километри.
Примерен вход и изход
Вход 5 day Изход 4.65
Вход 7 night Изход 7
Вход 25 day Изход  2.25
Вход  180 night Изход   10.8
       

*/
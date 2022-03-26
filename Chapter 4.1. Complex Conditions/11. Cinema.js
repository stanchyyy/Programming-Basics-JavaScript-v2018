function Cinema([arg_projectionType,arg_r,arg_c]){
    let projectionType = arg_projectionType.toLowerCase();
    let r = parseInt(arg_r);
    let c = parseInt(arg_c);
    let result;
    let ticketPrice;

    switch (projectionType){
        case "premiere": ticketPrice = 12.00;
        break;
        case "normal" : ticketPrice = 7.50;
        break;
        case "discount": ticketPrice = 5.00;
        break;
    }
    let seats = r*c;
    result = (seats*ticketPrice).toFixed(2) + " leva";
    console.log(result);
}

Cinema(["Premiere", 10, 12]);
Cinema(["Normal", 21, 13]);





/*
Задача: кино
В една кинозала столовете са наредени в правоъгълна форма в r реда и c колони. Има три вида прожекции с билети на различни цени:
• Premiere – премиерна прожекция, на цена 12.00 лева.
• Normal – стандартна прожекция, на цена 7.50 лева.
• Discount – прожекция за деца, ученици и студенти на намалена цена от 5.00 лева.
Напишете програма, която въвежда тип прожекция (стринг), брой редове и брой колони в залата (цели числа) и изчислява общите приходи от билети при пълна зала. Резултатът да се отпечата във формат като в примерите по-долу - с 2 цифри след десетичния знак.
Примерен вход и изход
Вход Premiere 10 12 Изход 1440.00 leva
Вход Normal 21 13 Изход 2047.50 leva

*/
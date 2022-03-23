function Firm([arg_hoursNeeded,arg_time,arg_workers]){
    const hoursNeeded = parseInt(arg_hoursNeeded);
    const time = parseInt(arg_time);
    const workers = parseInt(arg_workers);
    const educationPercentage  = 10;
    const workingHorusPerDay = 8;
    const overtime = 2;
    let result;
    
    let hoursAvailable = Math.floor((time - (time*educationPercentage)/100)*(workingHorusPerDay+overtime)*workers);

    if(hoursAvailable>=hoursNeeded){
        result = `Yes!${hoursAvailable-hoursNeeded} hours left.`;
    }
    else{
        result = `Not enough time!${hoursNeeded-hoursAvailable} hours needed.`;
    }
    console.log(result);

}

Firm([90, 7, 3]);
Firm([99, 3, 1]);

/*
Задача: фирма
Фирма получава заявка за изработването на проект, за който са необходими определен брой часове. Фирмата разполага с определен брой дни. През 10% от дните служителите са на обучение и не могат да работят по проекта. Един нормален работен ден във фирмата е 8 часа. Проектът е важен за фирмата и всеки служител задължително работи по проекта в извънработно време по 2 часа на ден.
Часовете трябва да са закръглени към по-ниско цяло число (например → 6.98 часа се закръглят на 6 часа).
Напишете програма, която изчислява дали фирмата може да завърши проекта навреме и колко часа не достигат или остават.
Входни данни
Програмата прочита точно 3 реда (аргумента):
• На първия ред (аргумент) са необходимите часове – цяло число в интервала [0 … 200 000].
• На втория ред (аргумент) са дните, с които фирмата разполага – цяло число в интервала [0 … 20 000].
• На третия ред (аргумент) е броят на всички служители – цяло число в интервала [0 … 200].
Изходни данни
Да се отпечата на конзолата един ред:
• Ако времето е достатъчно:
o "Yes!{оставащите часове} hours left."
• Ако времето НЕ Е достатъчно:
o "Not enough time!{недостигащите часове} hours needed."
Примерен вход и изход
Вход 90 7 3 Изход Yes!99 hours left.
Вход 99 3 1  Изход   Not enough time!72 hours needed.

*/
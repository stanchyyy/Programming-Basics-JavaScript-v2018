function Volleyball([arg_yearType,arg_p,arg_h]){
    const weekendsForVoleyball = 48;
    let yearType = arg_yearType.toLowerCase();
    let holidays = parseInt(arg_p);
    let weekendsToHomeTown = parseInt(arg_h);
    let result;
    let volleyballInHomeTown = holidays;
    let volleyballInSofia = (weekendsForVoleyball-weekendsToHomeTown)*(3/4);
    //(two thirds of holidays) + (volleyball in home town on Sunday) + 
    let volleyballDays = (holidays*(2/3)) + volleyballInHomeTown + volleyballInSofia;
    if(yearType==="leap"){
        volleyballDays+=volleyballDays*(15/100);
    }
    result = volleyballDays;

    console.log(Math.floor(result));
}

Volleyball(["leap", 5, 2]);
Volleyball(["normal", 3, 2]);
Volleyball(["normal", 11, 6]);
Volleyball(["leap", 0, 1]);

/*
Задача: волейбол
Влади е студент, живее в София и си ходи от време на време до родния град. Той е много запален по волейбола,
но е зает през работните дни и играе волейбол само през уикендите и в празничните дни. Влади играе в София всяка събота,
когато не е на работа и не си пътува до родния град, както и в 2/3 от празничните дни. Той пътува до родния си град h пъти в годината,
където играе волейбол със старите си приятели в неделя. Влади не е на работа 3/4 от уикендите, в които е в София. Отделно, през
високосните години Влади играе с 15% повече волейбол от нормалното. Приемаме, че годината има точно 48 уикенда, подходящи за волейбол.
Напишете програма, която изчислява колко пъти Влади е играл волейбол през годината. Закръглете резултата надолу
 до най-близкото цяло число (напр. 2.15 -> 2; 9.95 -> 9).
Входните данни се четат от конзолата:
• Първият ред съдържа думата “leap” (високосна година) или “normal” (нормална година с 365 дни).
• Вторият ред съдържа цялото число p – брой празници в годината (които не са събота или неделя).
• Третият ред съдържа цялото число h – брой уикенди, в които Влади си пътува до родния град.
Примерен вход и изход
Вход leap 5 2 Изход 45
Вход normal 3 2 Изход 38
Вход normal 11 6 Изход 44
Вход leap 0 1 Изход     41
*/
function SleepyTomCat([arg_Holidays]){
    const holidays = parseInt(arg_Holidays);
    const maxPlayTime = 30000;
    const businessPlayTime = 63;
    const weekendPlayTime = 127;
    const daysInYear = 365;

    let playTimeDuringHolidays = holidays*weekendPlayTime;
    let playTimeDuringBusiness = (daysInYear-holidays)*businessPlayTime;
    let totalPlayTime = playTimeDuringBusiness+playTimeDuringHolidays;

    if(totalPlayTime>maxPlayTime){
        console.log("Tom will run away");
        console.log(`${Math.trunc((totalPlayTime-maxPlayTime)/60)} hours and ${Math.trunc((totalPlayTime-maxPlayTime)%60)} minutes more for play`);
    }
    else{
        console.log("Tom sleeps well");
        console.log(`${Math.trunc((maxPlayTime - totalPlayTime)/60)} hours and ${Math.trunc((maxPlayTime-totalPlayTime)%60)} minutes less for play`);
    }


}



SleepyTomCat([113]);
SleepyTomCat([20]);


/*
Задача: поспаливата котка Том
Котката Том обича по цял ден да спи, за негово съжаление стопанинът му си играе с него винаги когато има свободно време. За да се наспи добре, нормата за игра на Том е 30 000 минути в година. Времето за игра на Том зависи от почивните дни на стопанина му:
• Когато е на работа, стопанинът му си играе с него по 63 минути на ден.
• Когато почива, стопанинът му си играе с него по 127 минути на ден.
Напишете програма, която въвежда броя почивни дни и отпечатва дали Том може да се наспи добре и колко е разликата от нормата за текущата година, като приемем че годината има 365 дни.
Пример: 20 почивни дни -> работните дни са 345 (365 – 20 = 345). Реалното време за игра е 24 275 минути (345 * 63 + 20 * 127). Разликата от нормата е 5 725 минути (30 000 – 24 275 = 5 725) или 95 часа и 25 минути.
Входни данни
Програмата прочита едно цяло число (аргумент) - броят почивни дни в интервала [0 … 365].
Изходни данни
На конзолата трябва да се отпечатат два реда.
• Ако времето за игра на Том е над нормата за текущата година:
o На първия ред отпечатайте: “Tom will run away”.
o На втория ред отпечатайте разликата от нормата във формат: “{H} hours and {M} minutes more for play”.
• Ако времето за игра на Том е под нормата за текущата година:
o На първия ред отпечатайте: “Tom sleeps well”.
o На втория ред отпечатайте разликата от нормата във формат: “{H} hours and {M} minutes less for play”.
Примерен вход и изход
Вход 113 Изход Tom will run away 3 hours and 47 minutes for play
Вход 20 Изход Tom sleeps well 95 hours and 25 minutes less for play  
*/
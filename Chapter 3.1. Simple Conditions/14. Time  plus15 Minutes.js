function TimePlusFifteenMinutes([hourInput,minuteInput]){
    let hour = parseInt(hourInput);
    let minute = parseInt(minuteInput);
    let minutesPlusFifteen = minute+15;

    if(minutesPlusFifteen>=60){
        hour+=1;
        minute=minutesPlusFifteen-60;
    }
    else{
        minute+=15;
    }

    if(hour>=24){
        hour=0;
    }

    if(minute<10){
        minute="0"+minute;
    }



    console.log(hour +":"+minute)
}

TimePlusFifteenMinutes([1, 46]);
TimePlusFifteenMinutes([0, 01]);
TimePlusFifteenMinutes([23, 59]);
TimePlusFifteenMinutes([11, 08]);




/*Задача: време + 15 минути
Да се напише функция, която като параметър приема час и минути от 24-часово денонощие и изчислява колко ще е часът след 15 минути. Резултатът да се отпечата във формат hh:mm. Часовете винаги са между 0 и 23, а минутите винаги са между 0 и 59. Часовете се изписват с една или две цифри. Минутите се изписват винаги с по две цифри и с водеща нула, когато е необходимо.
Примерен вход и изход

Вход 1 46  Изход 2:01
Вход 0 01  Изход 0:16
Вход 23 59  Изход 0:14
Вход 11 08  Изход 11:23
*/
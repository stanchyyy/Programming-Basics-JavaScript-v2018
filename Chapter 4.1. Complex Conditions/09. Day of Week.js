function DayOfWeek(arg_dayOfWeek){
    let dayOfWeerk = Number(arg_dayOfWeek);
    let result;
    switch(dayOfWeerk){
        case 1 : result="Monday";
        break;
        case 2 : result="Tuesday";
        break;
        case 3: result = "Wednesday";
        break;
        case 4: result = "Thursday";
        break;
        case 5: result = "Friday";
        break;
        case 6: result="Saturday";
        break;
        case 7: result = "Sunday";
        break;
        default : result="Error";
        break
    }
    console.log(result);
}

DayOfWeek(1);
DayOfWeek(7);
DayOfWeek(-1);

/*
Пример: ден от седмицата
Нека напишем програма, която принтира деня от седмицата (на английски) според въведеното число (1 … 7) или "Error", ако е подаден невалиден ден.
Примерен вход и изход
 Вход 1 Изход Monday     
Вход  7 Изход Sunday
Вход -1 Изход Error
*/
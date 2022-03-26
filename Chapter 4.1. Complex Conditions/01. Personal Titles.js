function PersonalTitles([arg_age,arg_gender]){
    let age = parseFloat(arg_age);
    let gender = arg_gender;
    let result;

    if(gender==="m"){
        if(age >=16){
            result = "Mr.";
        }
        else{
            result = "Master";
        }
    }
    else{
        if(age >=16){
            result = "Ms.";
        }
        else{
            result = "Miss";
        }
    }
    console.log(result);
}



PersonalTitles([12, "f"]);
PersonalTitles([17, "m"]);
PersonalTitles([25, "f"]);
PersonalTitles([13.5 ,"m"]);

/*
Пример: обръщение според възраст и пол
Според въведени възраст (дробно число) и пол (m / f) да се отпечата обръщение:
• “Mr.” – мъж (пол “m”) на 16 или повече години.
• “Master” – момче (пол “m”) под 16 години.
• “Ms.” – жена (пол “f”) на 16 или повече години.
• “Miss” – момиче (пол “f”) под 16 години.
Примерен вход и изход
Вход  12 f Изход Miss
Вход  17 m  Изход Mr.
Вход 25 f Изход  Ms.
Вход  13.5 m Изход  Master
*/
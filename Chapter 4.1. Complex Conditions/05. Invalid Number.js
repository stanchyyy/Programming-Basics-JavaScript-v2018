function InvalidNumber([arg_number]){
    let number = Number(arg_number);
    let range = (number>=100 && number<=200 || number===0)

    if(!range){
        console.log("Invalid")
    }

}


InvalidNumber([75]);
InvalidNumber([150]);
InvalidNumber([220]);



/*
Пример: невалидно число
Дадено число е валидно, ако е в диапазона [100 … 200] или е 0. Да се направи проверка за невалидно число.
Примерен вход и изход
Вход 75 Изход  invalid 
Вход 150 Изход  (няма изход)
Вход 220 Изход  invalid 
*/

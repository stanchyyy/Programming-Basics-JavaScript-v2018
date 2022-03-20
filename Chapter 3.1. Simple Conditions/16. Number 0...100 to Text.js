function NumberFromZeroToHundredToText([Number]){
    let inputNumber = parseInt(Number);
    let result;
    if(inputNumber / 10<1){
        if(inputNumber===1){
            result = "one";
        }
        else if(inputNumber===2){
            result = "two";
        }
        else if(inputNumber===3){
            result = "three";
        }
        else if(inputNumber===4){
            result = "four";
        }
        else if(inputNumber===5){
            result = "five";
        }
        else if(inputNumber===6){
            result = "six";
        }
        else if(inputNumber===7){
            result = "seven";
        }
        else if(inputNumber===8){
            result = "eight";
        }
        else if(inputNumber===9){
            result = "nine";
        }
    }
    else if(inputNumber % 100>1 && inputNumber/100<1){

    }
    else if(inputNumber/100===1){
        result="one hundred";
    }


}




/*
Задача*: изписване на число от 0 до 100 с думи
Да се напише функция, която превръща число в диапазона [0 … 100] в текст.
Примерен вход и изход
Вход 6  Изход six
Вход 25  Изход twenty five
Вход 42  Изход forty two
*/
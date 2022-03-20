function ThreeEqualNumbers([numberOne,NumberTwo,NumberThree]){
    let result;
    if(numberOne===NumberTwo && numberOne===NumberThree){
        result="yes";
    }
    else{
        result="no";
    }
    console.log(result);
}

ThreeEqualNumbers([5, 5, 5]);
ThreeEqualNumbers([5, 4, 5]);
ThreeEqualNumbers([1, 2, 3]);



/*
Да се напише функция, в която се подават като аргументи 3 числа и се отпечатва дали те са еднакви (yes / no).
Примерен вход и изход
Вход 1 2 3  Изход no
Вход 5 5 5  Изход yes
Вход 5 4 5  Изход no

*/
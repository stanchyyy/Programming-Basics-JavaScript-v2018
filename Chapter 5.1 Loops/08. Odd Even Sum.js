function OddEvenSum(arg_numbers){
    let odd=0;
    let even=0;
    let number = arg_numbers[0];
    for(let i=1; i<=number;i++){
        if(i%2===0){
            even+=arg_numbers[i]
        }
        else{
            odd+=arg_numbers[i]
        }
    }
    if(odd===even){
        console.log("Yes");
        console.log(`Sum = ${odd}`);

    }
    else{
        console.log("No");
        console.log(`Diff = ${Math.abs(odd-even)}`);
    }
}

OddEvenSum([4, 10, 50, 60, 20]);
OddEvenSum([4, 3, 5, 1, -2]);
OddEvenSum([3, 5, 8, 1]);

// Пример: четна / нечетна сума
// Да се напише програма, която въвежда n цели числа и проверява дали сумата на числата на четни позиции е равна на сумата на числата на нечетни позиции. При равенство печата "Yes" + сумата, иначе печата "No" + разликата. Разликата се изчислява по абсолютна стойност. Форматът на изхода трябва да е като в примерите по-долу.
// Примерен вход и изход Вход Изход Вход Изход Вход Изход 4 10 50 60 20 Yes Sum = 70 4 3 5 1 -2 No Diff = 1 3 5 8 1 No Diff = 2
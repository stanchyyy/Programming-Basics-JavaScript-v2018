function LeftandRightSum(arg_numbers){
    let middle = arg_numbers[0];
    let left=0;
    let right=0;
    let result;
    for(let i = 1; i<arg_numbers.length;i++){
        if(i<=middle){
            left +=arg_numbers[i];
        }
        else{
            right +=arg_numbers[i];
        }
    }
    if(left===right){
        result = `Yes, sum = ${left}`;
    }
    else {
        result = `No, diff = ${Math.abs(left-right)}`;
    }

    console.log(result);
}
LeftandRightSum([2, 10, 90, 60, 40]);
LeftandRightSum([2, 90, 9, 50, 50]);

// Пример: лява и дясна сума
// Да се напише програма, която въвежда 2 * n цели числа и проверява дали сумата на първите n числа (лява сума) е равна на сумата на вторите n числа (дясна сума). При равенство се печата "Yes" + сумата, иначе се печата "No" + разликата. Разликата се изчислява като положително число (по абсолютна стойност). Форматът на изхода трябва да е като в примерите по-долу.
// Примерен вход и изход Вход Изход Вход Изход 2 10 90 60 40 Yes, sum = 100 2 90 9 50 50 No, diff = 1
function MinNumber (arg_numbers){
let minNumber;

for(let i=1;i<=arg_numbers.length;i++){
    if(minNumber>arg_numbers[i] || typeof(minNumber)==="undefined"){
        minNumber=arg_numbers[i];
    }
}
console.log(minNumber);
}

MinNumber([2, 100, 99]);
MinNumber([3, -10, 20, -30]);
MinNumber([4, 45, -20, 7, 99]);



// Пример: най-малко число
// Да се напише програма, която въвежда n цели числа (n > 0) и намира най-малкото измежду тях. Първо се въвежда броя числа n, след тях още n числа по едно на ред.
// Примерен вход и изход Вход Изход Вход Изход Вход Изход 2 100 99 99 3 -10 20 -30 -30 4 45 -20 7 99 -20
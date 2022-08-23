function HalfSumElement(arg_numbers){
let sum;
let sumAll=0;
let biggest;
let rest =0;
let messageLineOne;
let messageLineTwo

//define SumAll & Biggest number
for(let i=1;i<arg_numbers.length;i++){
    sumAll+=arg_numbers[i];
    if(typeof(biggest)==="undefined" ||biggest<arg_numbers[i]){
    biggest = arg_numbers[i];
    }
}

for(let i=1;i<arg_numbers.length;i++){
    sum=0;
    for(let j=1;j<arg_numbers.length;j++){
        if(j!=i){
            sum+=arg_numbers[j];
        }
    }
    if(sum==arg_numbers[i]){
        messageLineOne = "Yes";
        messageLineTwo = `Sum = ${sum}`;
        break;
    }
    else{
        rest = Math.abs(biggest-(sumAll-biggest));
        messageLineOne = "No";
        messageLineTwo = `diff = ${rest}`;
    }
    
}
console.log(messageLineOne);
console.log(messageLineTwo);
}

HalfSumElement([7, 3, 4, 1, 1, 2, 12, 1]);
HalfSumElement([3, 1, 1, 10]);
HalfSumElement([3, 1, 1, 1]);
HalfSumElement([3, 5, 5, 1]);
HalfSumElement([4, 6 ,1, 2, 3]);




// Задача: елемент, равен на сумата на останалите
// Да се напише програма, която въвежда n цели числа и проверява дали сред тях съществува число, което е равно на сумата на всички останали. Ако има такъв елемент, се отпечатва "Yes" + неговата стойност, в противен случай - "No" + разликата между най-големия елемент и сумата на останалите (по абсолютна стойност).
// Примерен вход и изход
// Вход Изход Коментар Вход Изход Коментар 7 3 4 1 1 2 12 1 Yes Sum = 12 3 + 4 + 1 + 2 + 1 + 1 = 12 3 1 1 10 No Diff = 8 |10 – (1 + 1)| = 8
// Вход Изход Вход Изход Вход Изход 3 1 1 1 No Diff = 1 3 5 5 1 No Diff = 1 4 6 1 2 3 Yes Sum = 6

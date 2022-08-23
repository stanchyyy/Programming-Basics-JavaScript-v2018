function EqualPairs(arg_numbers){
    let maxDiff=0;
    let sumAllPairs;
    let result;
    let pairDiff;
    for(let i=1;i<arg_numbers.length-1;i+=2){
        let sum = arg_numbers[i]+arg_numbers[i+1];
        if(typeof(sumAllPairs)==="undefined"){
            sumAllPairs=sum;
        }
        else if(sumAllPairs!==sum){
            pairDiff = Math.abs(sumAllPairs-sum);
            if(pairDiff>maxDiff){
                maxDiff=pairDiff;
            } 
        }
        

    }

    result = maxDiff==0 ? `Yes, value=${sumAllPairs}` : `No, maxdiff=${maxDiff}`;
    console.log(result);

}


EqualPairs([2, -1, 2, 0, -1]);
EqualPairs([1, 5, 5]);
EqualPairs([3, 1, 2, 0, 3, 4, -1]);
EqualPairs([2, 1, 2, 2, 2]);

// Дадени са 2 * n числа. Първото и второто формират двойка, третото и четвъртото също и т.н. Всяка двойка има стойност – сумата от съставящите я числа. Напишете програма, която проверява дали всички двойки имат еднаква стойност.
// В случай, че е еднаква отпечатайте "Yes, value=…" + стойността, в противен случай отпечатайте максималната разлика между две последователни двойки в следния формат – "No, maxdiff=…" + максималната разлика.
// Входът се състои от число n, следвано от 2*n цели числа, всички по едно на ред.
// Примерен вход и изход
// Вход Изход Коментар Вход Изход Коментар 2 -1 2 0 -1 No, maxdiff=2 стойности = {1, -1} разлики = {2} макс. разлика = 2 1 5 5 Yes, value=10 стойности = {10} една стойност еднакви стойности
// Вход Изход Коментар Вход Изход Коментар 3 1 2 0 3 4 -1 Yes, value=3 стойности = {3, 3, 3} еднакви стойности 2 1 2 2 2 No, maxdiff=1 стойности = {3, 4} разлики = {1} макс. разлика = 1

function VowelsSum([arg_numbers]){
    let sum=0;
    for(let i=0;i<=arg_numbers.length;i++){
        switch(arg_numbers[i]){
            case "a" : {
                sum+=1;
                break;
            }
            case "e" : {
                sum+=2;
                break;
            }
            case "i" : {
                sum+=3;
                break;
            }
            case "o" : {
                sum+=4;
                break;
            }
            case "u" : {
                sum+=5;
                break;
        }
        default :{

        }
    }
}
console.log(sum);
}

VowelsSum(["hello"]);
VowelsSum(["hi"]);
VowelsSum(["bamboo"]);
VowelsSum(["beer"]);


// Пример: сумиране на гласните букви
// Да се напише програма, която въвежда текст (стринг), изчислява и отпечатва сумата от стойностите на гласните букви според таблицата по-долу: a e i o u 1 2 3 4 5
// Примерен вход и изход Вход Изход Вход Изход hello 6 (e+o = 2+4 = 6) bamboo 9 (a+o+o = 1+4+4 = 9) hi 3 (i = 3) beer 4 (e+e = 2+2 = 4)

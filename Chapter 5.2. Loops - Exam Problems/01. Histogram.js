function Histogram(arg_numbers){
    let count = arg_numbers[0];
    let pArray=new Array(0,0,0,0,0);
    
    for(let i = 1; i<arg_numbers.length;i++){
        if(arg_numbers[i]<200){
            pArray[0]=pArray[0]+1;
        }
        else if(arg_numbers[i]>=200 && arg_numbers[i]<400){
            pArray[1]=pArray[1]+1;
        }
        else if(arg_numbers[i]>=400 && arg_numbers[i]<600){
            pArray[2]= pArray[2]+1;
        }
        else if(arg_numbers[i]>=600 && arg_numbers[i]<800){
            pArray[3]=pArray[3]+1;
        }
        else if(arg_numbers[i]>=800){
            pArray[4]=pArray[4]+1;
        }
    }

    for(let y = 0;y < pArray.length; y++){
        console.log(((pArray[y]/count)*100).toFixed(2)+"%");
    }
    

}

Histogram([3, 1, 2, 999]);
Histogram([4, 53, 7, 56, 999]);
Histogram([9, 367, 99, 200, 799, 999, 333, 555, 111, 9]);
Histogram([14, 53, 7, 56, 180, 450, 920, 12, 7, 150, 250, 680, 2, 600, 200]);
Histogram([7, 800, 801, 250, 199, 399, 599, 799]);



// Задача: хистограма
// Дадени са n цели числа в интервала [1 … 1000]. От тях някакъв процент p1 са под 200, процент p2 са от 200 до 399, процент p3 са от 400 до 599, процент p4 са от 600 до 799 и останалите p5 процента са от 800 нагоре. Да се напише програма, която изчислява и отпечатва процентите p1, p2, p3, p4 и p5.
// Пример: имаме n = 20 числа: 53, 7, 56, 180, 450, 920, 12, 7, 150, 250, 680, 2, 600, 200, 800, 799, 199, 46, 128, 65. Получаваме следното разпределение и визуализация:
// Група Числа Брой числа Процент < 200 53, 7, 56, 180, 12, 7, 150, 2, 199, 46, 128, 65 12 p1 = 12 / 20 * 100 = 60.00% 200… 399 250, 200 2 p2 = 2 / 20 * 100 = 10.00% 400… 599 450 1 p3 = 1 / 20 * 100 = 5.00% 600… 799 680, 600, 799 3 p4 = 3 / 20 * 100 = 15.00% ≥ 800 920, 800 2 p5 = 2 / 20 * 100 = 10.00%
// Входни данни
// На първия ред (аргумент) от входа стои цялото число n (1 ≤ n ≤ 1000), което представлява броя редове с числа, които ще ни бъдат подадени. На следващите n реда (аргумента) стои по едно цяло число в интервала [1 … 1000] – числата, върху които да бъде изчислена хистограмата.
// Изходни данни
// Да се отпечата на конзолата хистограма от 5 реда, всеки от които съдържа число между 0% и 100%, форматирано с точност две цифри след десетичния знак (например 25.00%, 66.67%, 57.14%).
// Примерен вход и изход Вход Изход Вход Изход 3 1 2 999 66.67% 0.00% 0.00% 0.00% 33.33% 4 53 7 56 999 75.00% 0.00% 0.00% 0.00% 25.00%
// Вход Изход Вход Изход Вход Изход 9 367 99 200 799 999 33.33% 33.33% 11.11% 11.11% 11.11% 14 53 7 56 180 450 57.14% 14.29% 7.14% 14.29% 7.14% 7 800 801 250 199 14.29% 28.57% 14.29% 14.29% 28.57%
// Вход Изход Вход Изход Вход Изход 333 555 111 9 920 12 7 150 250 680 2 600 200 399 599 799
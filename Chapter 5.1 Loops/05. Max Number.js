function MaxNumber(arg_numbers){
    let count = arg_numbers[0];
    let maxNumber;
    for(let i=1;i<=arg_numbers.length;i++){
        if(arg_numbers[i]>maxNumber || typeof(maxNumber)==='undefined')
        {
            maxNumber=arg_numbers[i];
        }
    }
    console.log(`max = ${maxNumber}`);

}


MaxNumber([2,100,99]);
MaxNumber([3, -10, 20, -30]);
MaxNumber([4, 45, -20, 7, 99]);
MaxNumber([1, 999]);
MaxNumber([2, -1, -2]);





//Да се напише програма, която въвежда n цели числа (n > 0) и намира най-голямото измежду тях. На първия ред на входа се въвежда броят числа n. След това се въвеждат самите числа, по едно на ред. Примери:
//вход 2,  100, 99
//изход 100

//вход 3 -10 20 -30
//изход 20

//вход 4 45 -20 7 99
//изход 99

//вход 1
//изход 999

//вход 2,  -1,2
//изход 100
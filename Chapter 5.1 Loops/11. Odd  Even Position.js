function OddEvenPosition(arg_numbers){
    let OddSum;
    let OddMin="No";
    let OddMax="No";
    let EvenSum;
    let EvenMin="No";
    let EvenMax="No";

    for(let i=1;i<arg_numbers.length;i++){
        if(i%2===0){
            if(typeof(EvenSum)==="undefined"){
                EvenSum=arg_numbers[i];
            }
            else{
                EvenSum+=arg_numbers[i];
            }
            if(EvenMin==="No" || EvenMin>arg_numbers[i]){
                EvenMin = arg_numbers[i];
            }
            if(EvenMax==="No" || EvenMax<arg_numbers[i]){
                EvenMax = arg_numbers[i];
            }
        }
        else{
            if(typeof(OddSum)==="undefined"){
                OddSum=arg_numbers[i];
            }
            else{
                OddSum+=arg_numbers[i];
            }
            if(OddMin==="No" || OddMin>arg_numbers[i]){
                OddMin = arg_numbers[i];
            }
            if(OddMax==="No" || OddMax<arg_numbers[i]){
                OddMax = arg_numbers[i];
            }
        }
    }
    if(arg_numbers.length<=1){
        OddSum = 0;
    }
    else if(arg_numbers.length=2){
        EvenSum=0;
    }
    console.log(`OddSum=${OddSum}`);
    console.log(`OddMin=${OddMin}`);
    console.log(`OddMax=${OddMax}`);
    console.log(`EvenSum=${EvenSum}`);
    console.log(`EvenMin=${EvenMin}`);
    console.log(`EvenMax=${EvenMax}`);

}


//OddEvenPosition([6, 2, 3, 5, 4, 2, 1]);
//OddEvenPosition([2, 1.5, -2.5]);
OddEvenPosition([1,1]);
//OddEvenPosition([3, -1, -2, -3]);
//OddEvenPosition([1, -5]);
//OddEvenPosition([5, 3, -2, 8, 11, -3]);



// Напишете програма, която чете n числа и пресмята сумата, минимума и максимума на числата на четни и нечетни позиции (броим от 1). Когато няма минимален / максимален елемент, отпечатайте "No".
// Примерен вход и изход Вход Изход Вход Изход Вход Изход 6 2 3 5 4 2 1 OddSum=9, OddMin=2, OddMax=5, EvenSum=8, EvenMin=1, EvenMax=4 2 1.5 -2.5 OddSum=1.5, OddMin=1.5, OddMax=1.5, EvenSum=-2.5, EvenMin=-2.5, EvenMax=-2.5 1 1 OddSum=1, OddMin=1, OddMax=1, EvenSum=0, EvenMin=No, EvenMax=No
// Вход Изход Вход Изход Вход Изход 3 -1 -2 -3 OddSum=-4, OddMin=-3, OddMax=-1, EvenSum=-2, EvenMin=-2, EvenMax=-2 1 -5 OddSum=-5, OddMin=-5, OddMax=-5, EvenSum=0, EvenMin=No, EvenMax=No 5 3 -2 8 11 -3 OddSum=8, OddMin=-3, OddMax=8, EvenSum=9, EvenMin=-2, EvenMax=11

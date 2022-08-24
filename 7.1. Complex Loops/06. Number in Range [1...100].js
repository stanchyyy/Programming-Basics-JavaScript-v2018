function NumberInRange1to100(arg_number){
    let i=0;
    number = parseInt(arg_number[i]);
    while(number<1 || number>100){
        i++;
        console.log("Invalid number!");
        number=parseInt(arg_number[i]);
    }
    console.log(`The number is ${number}`);

}

NumberInRange1to100([-33,222,1]);
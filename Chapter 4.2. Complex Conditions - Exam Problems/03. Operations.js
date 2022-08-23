function MathOperations([n1,n2,operator]){
    let result;
    let evenOdd;
    let textToPrint;

    switch(operator){
        case "+" :{
            result = n1+n2;
            evenOdd = result%2===0 ? "even" :"odd";
            textToPrint = `${n1} ${operator} ${n2} = ${result} - ${evenOdd}`;
            break;
        }
        case "-" :{
            result = n1-n2;
            evenOdd = result%2===0 ? "even" :"odd";
            textToPrint = `${n1} ${operator} ${n2} = ${result} - ${evenOdd}`;
            break;
        }
        case "*": {
            result = n1*n2;
            evenOdd = result%2===0 ? "even" :"odd";
            textToPrint = `${n1} ${operator} ${n2} = ${result} - ${evenOdd}`;
            break;
        }
        case "/":{
            if(n2!=0){
                result = (n1/n2).toFixed(2);
                textToPrint = `${n1} / ${n2} = ${result}`;
            }
            else{
                textToPrint = `Cannot divide ${n1} by zero`;
            }
            break;
        }
        case "%":{
            if(n2!=0){
                result = (n1%n2);
                textToPrint = `${n1} % ${n2} = ${result}`;
            }
            else{
                textToPrint = `Cannot divide ${n1} by zero`;
            }
            break;
        }
    }
    console.log(textToPrint);
}

MathOperations([10, 12, "+"]);

MathOperations([10, 1, "-"]);
MathOperations([7, 3, "*"]);
MathOperations([123, 12, "/"]);
MathOperations([10, 3, "%"]);

MathOperations([112, 0, "/"]);
function Number100To200([in_InputNumber]){
    let number = parseInt(in_InputNumber);
    if(number<100){
        console.log("Less than 100");
    }
    else if(number>=100 && number<=200){
        console.log("Between 100 and 200");
    }
    else{
        console.log("Greater than 200");
    }
}


Number100To200([95]);
Number100To200([120]);
Number100To200([210]);
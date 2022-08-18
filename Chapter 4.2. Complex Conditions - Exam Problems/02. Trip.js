function Trip([budget,season]){
    let parsedBudget = parseFloat(budget);
    let destination;
    let place;
    let summerExpenditure;
    let winterExpenditure;
    let expense;

    if(season==="winter"){
        place="Hotel";
    }
    else{
        place="Camp";
    }

    if( parsedBudget<=100){
        destination = "Bulgaria";
        summerExpenditure = "30";
        winterExpenditure = "70";
    }
    else if(parsedBudget<=1000){
        destination = "Balkans";
        summerExpenditure = "40";
        winterExpenditure = "80";
    }
    else {
        destination = "Europe";
        summerExpenditure = "90";
        winterExpenditure = "90";
    }

    switch(destination){
        case "Bulgaria" : {
            expense = season==="winter"? ((parsedBudget*winterExpenditure)/100) : ((parsedBudget*summerExpenditure)/100);
            break;
        }
        case "Balkans" : {
            expense = season==="winter"? ((parsedBudget*winterExpenditure)/100) : ((parsedBudget*summerExpenditure)/100);
            break;
        }
        case "Europe" : {
            expense = season==="winter"? ((parsedBudget*winterExpenditure)/100) : ((parsedBudget*summerExpenditure)/100);
            break;
        }
        default: {
            console.log("Default not implemented");
        }
    }
    expense = (Math.round(expense * 100) / 100).toFixed(2);
    console.log(`Somewhere in ${destination}`);
    console.log(`${place} - ${expense}`);
}

Trip([50, "summer"]);
Trip([312, "summer"]);
Trip([1500, "summer"]);
Trip([75, "winter"]);
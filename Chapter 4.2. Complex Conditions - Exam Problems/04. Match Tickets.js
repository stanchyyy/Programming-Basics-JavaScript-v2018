function MatchTickets([arg_budget,arg_type,arg_peopleCount]){
    let transportCost;
    let transportBudgetPercentage;
    let ticketsPrice;
    let vipPrice = 499.99;
    let normalPrice = 249.99;
    let resultMessage;
    let reminder;
    
    if(arg_peopleCount<5){
        transportBudgetPercentage = 75;
    }
    else if(arg_peopleCount<10){
        transportBudgetPercentage = 60;
    }
    else if(arg_peopleCount<25){
        transportBudgetPercentage = 50;
    }
    else if(arg_peopleCount<50){
        transportBudgetPercentage = 40;
    }
    else if(arg_peopleCount>49){
        transportBudgetPercentage = 25;
    }
    transportCost = (arg_budget*transportBudgetPercentage)/100;

    switch(arg_type){
        case "Normal": {
            ticketsPrice = arg_peopleCount*normalPrice;
            break;
        }
        case "VIP":{
            ticketsPrice = arg_peopleCount*vipPrice;
            break;
        }
    }
    reminder = Math.round((arg_budget-transportCost-ticketsPrice)*100)/100;
    if(reminder>=0){
        resultMessage = `Yes! You have ${reminder} leva left.`;
    }
    else {
        resultMessage= `Not enough money! You need ${Math.abs(reminder)} leva.`;
    }
    console.log(resultMessage);
}





MatchTickets([1000, "Normal", 1]);
MatchTickets([30000, "VIP", 49]);
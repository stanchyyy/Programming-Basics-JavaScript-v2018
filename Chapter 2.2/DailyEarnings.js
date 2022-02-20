function DailyEarnings([workDays,earnedMoneyPerDay,usdExchangeRate]){
let monthlyEarning = parseInt(workDays)*parseFloat(earnedMoneyPerDay);
let yearlyEarning = monthlyEarning*12;
let bonusEarning = monthlyEarning*2.5;
let tax = ((yearlyEarning+bonusEarning)*25)/100;
let netYearlyEarningBgn = (yearlyEarning+bonusEarning-tax)*parseFloat(usdExchangeRate);
let netDailyEarningInBgn = netYearlyEarningBgn/365;
console.log(netDailyEarningInBgn.toFixed(2));
}

DailyEarnings([21 ,75.00 ,1.59]);
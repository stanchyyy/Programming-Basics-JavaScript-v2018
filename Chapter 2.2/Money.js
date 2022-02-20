function Money([btc,yoan,comission]){
const usdRate = 1.76;
const eurRate = 1.95;
const bitcoinRate = 1168;
const chineseYoan = 0.15;

let btcToBgn = parseInt(btc)*bitcoinRate;
let yoanToBgn = (parseInt(yoan)*chineseYoan)*usdRate;
let moneyToEur = ((btcToBgn+yoanToBgn)/eurRate);
let comissionRate = (moneyToEur*comission)/100;
let peshoTripMoney = moneyToEur-comissionRate;
console.log(peshoTripMoney.toFixed(2));
}

Money([1, 5, 5]);

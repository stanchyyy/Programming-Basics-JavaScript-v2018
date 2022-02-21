function BonusScore([number]){
    let input = parseInt(number);
    let bonusScore;
    if(input <=100){
        bonusScore = 5;
    }
        else if(input<1000){
            bonusScore= input*0.2;
        }
        else if(input>1000){
            bonusScore = input*0.1;
        }
    if(input % 2 === 0){
        bonusScore += 1;

    }
    if(input %10===5){
        bonusScore += 2;
    }
    console.log("Bonus score: "+ bonusScore);
    console.log("Total score: "+ (bonusScore+input));
    }

BonusScore([20]);
BonusScore([175]);
BonusScore([2703]);
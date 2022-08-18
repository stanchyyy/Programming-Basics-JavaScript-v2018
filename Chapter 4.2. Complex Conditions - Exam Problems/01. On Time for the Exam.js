function OnTimeForTheExam([arg_examHour,arg_examMinutes,arg_arrivalHour,arg_arrivalMinute]){
    let arrivalMinutes = parseInt(arg_arrivalHour)*60+parseInt(arg_arrivalMinute);
    let examMinutes = parseInt(arg_examHour)*60+parseInt(arg_examMinutes);
    let minutesDifference = (examMinutes-arrivalMinutes);
    let state;
    let resultMessage;
    let beforeAfter;
    let clock;

    if(arrivalMinutes<examMinutes-30){
        state = "Early"
        beforeAfter="before";
    }
    else if(arrivalMinutes>examMinutes){
        state = "Late";
        beforeAfter="after";
    }
    else {
        state = "On time"
    }

    if(Math.abs(minutesDifference)<60){
        clock = `${Math.abs(minutesDifference)} minutes`;
    }
    else {
        clock = `${Math.abs(minutesDifference)/60}:${Math.abs(minutesDifference)%60} hours`;
    }
    resultMessage = `${clock} ${beforeAfter} the start`;


    switch(state){
        case "Late" :
        console.log("Late");
        console.log(resultMessage);

        break;
        case "On time" :
            console.log("On time");

        break;
        case "Early" :
            console.log("Early");
            console.log(resultMessage);
        
        break;

        default :
        console.log("case undefined");
    }

}

OnTimeForTheExam([9,30,9,50]);
OnTimeForTheExam([16,00,15,00]);
OnTimeForTheExam([9,00,8,30]);
OnTimeForTheExam([9,00,10,30]);
OnTimeForTheExam([14,00,13,55]);
OnTimeForTheExam([10,00,10,]);
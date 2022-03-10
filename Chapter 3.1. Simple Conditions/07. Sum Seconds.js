function SumSeconds([first,second,third]){
    let timeFirst = parseInt(first);
    let timeSecond = parseInt(second);
    let timeThird = parseInt(third);
    let sumOfTimes = timeFirst+timeSecond+timeThird;
    let minutes = Math.floor(sumOfTimes /60);


    let seconds = Math.floor(sumOfTimes % 60);
    if(seconds<10){
        seconds="0"+seconds;
    }
    console.log(minutes+":"+seconds);  
}

SumSeconds([35, 45, 44]);
SumSeconds([50, 50, 49]);
SumSeconds([14, 12, 10]);
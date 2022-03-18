function SpeedInfo([in_Speed]){
    let speed = parseFloat(in_Speed);
    let speedInfo;
    if(speed<=10){
        speedInfo="slow";
    }
    else if(speed>10 && speed<=50){
        speedInfo="average";
    }
    else if (speed>50 && speed<=150){
        speedInfo="fast";
    }
    else if (speed>150 && speed<=1000){
        speedInfo="ultra fast";
    }
    else{
        speedInfo="extremely fast";
    }
    console.log(speedInfo);

}

SpeedInfo([8]);
SpeedInfo([49.5]);
SpeedInfo([126]);
SpeedInfo([160]);
SpeedInfo([3500]);
function PointInRectangle([arg1,arg2,arg3,arg4,arg5,arg6]){
    let x1 = Number(arg1);
    let y1 = Number(arg2);
    let x2 = Number(arg3);
    let y2 = Number(arg4);
    let x = Number(arg5);
    let y = Number(arg6);

    if (x>=x1 && x<= x2 && y >= y1 && y<=y2){
        console.log("Inside");
    }
    else{
        console.log("Outside");
    }


}

PointInRectangle([2, -3, 12, 3, 8, -1]);

/*
Пример: точка в правоъгълник
Проверка дали точка {x, y} се намира вътре в правоъгълника {x1, y1} – {x2, y2}. Входните данни се четат от конзолата и се състоят от 6 реда: десетичните числа x1, y1, x2, y2, x и y (като се гарантира, че x1 < x2 и y1 < y2).
Примерен вход и изход
Вход 2 -3 12 3 8 -1 Изход   Inside

*/
function PointOnRectangleBorder([arg_x1,arg_y1,arg_x2,arg_y2,arg_x,arg_y]){

    let x1= Number(arg_x1);
    let y1 = Number(arg_y1);
    let x2 = Number(arg_x2);
    let y2 = Number(arg_y2);
    let x = Number(arg_x);
    let y = Number(arg_y);

    if (((x===x1 || x===x2) && (y>=y1) && (y<=y2)) ||  ((y===y1 || y===y2) && (x>=x1)&&(x<=x2))){
        console.log("Border");
    }
    else{
        console.log("Inside / Outside");
    }
}


PointOnRectangleBorder([2, -3, 12, 3, 12, -1]);
PointOnRectangleBorder([2, -3, 1,2, 3, 8, -1]);



/*
Пример: точка върху страна на правоъгълник
Да се напише програма, която проверява дали точка {x, y} се намира върху някоя от страните на правоъгълник {x1, y1} - {x2, y2}.
 Входните данни се четат от конзолата и се състоят от 6 реда: десетичните числа x1, y1, x2, y2, x и y (като се гарантира, че x1 < x2 и y1 < y2).
  Да се отпечата "Border" (точката лежи на някоя от страните) или "Inside / Outside" (в противен случай).



*/
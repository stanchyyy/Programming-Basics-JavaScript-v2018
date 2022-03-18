function AreaOfFigures([in_FigureType,in_FigureDimentionA,in_FigureDimentionB]){
    let area;
    if(in_FigureType=="square"){
        let side = parseFloat(in_FigureDimentionA);
        area = side*side;
    }
    if(in_FigureType=="rectangle"){
        let sideA = parseFloat(in_FigureDimentionA);
        let sideB = parseFloat(in_FigureDimentionB);
        area = sideA*sideB;
    }
    if(in_FigureType=="circle"){
        let radius = parseFloat(in_FigureDimentionA);
        area = Math.PI*(Math.pow(radius,2));
    }
    if(in_FigureType=="triangle"){
        let sideA = parseFloat(in_FigureDimentionA);
        let height = parseFloat(in_FigureDimentionB);
        area = sideA*0.5*height;
    }
    console.log(Math.round(area*1000)/1000);

}


AreaOfFigures(["square", 5]);
AreaOfFigures(["rectangle", 7, 2.5]);
AreaOfFigures(["circle", 6]);
AreaOfFigures(["triangle", 4.5, 20]);






/*
Задача: лица на фигури
Да се напише функция, която приема размерите на геометрична фигура и пресмята лицето й. Фигурите са четири вида: квадрат (square), правоъгълник (rectangle), кръг (circle) и триъгълник (triangle). Като първи аргумент на функцията се подава вида на фигурата (square, rectangle, circle, triangle).
• Ако фигурата е квадрат, като следващ аргумент подаваме едно число – дължина на страната му.
• Ако фигурата е правоъгълник, като следващи аргументи подаваме две числа – дължините на страните му.
• Ако фигурата е кръг, като следващ аргумент подаваме едно число – радиуса на кръга.
• Ако фигурата е триъгълник, като следващи аргументи подаваме две числа – дължината на страната му и дължината на височината към нея.
Резултатът да се закръгли до 3 цифри след десетичния знак.
Примерен вход и изход
Вход  triangle 4.5 20 Изход 45
Вход  square 5 Изход 25
Вход  rectangle 7 2.5 Изход 17.5
Вход  circle 6 Изход 113.097

*/


function Harvest([arg_landSize,arg_grapesPerSquareMeter,arg_wineNeeded,arg_workersCount]){
    const landSize = parseInt(arg_landSize);
    const grapesPerSquareMeter = parseFloat(arg_grapesPerSquareMeter);
    const wineNeeded = parseInt(arg_wineNeeded);
    const workersCount = parseInt(arg_workersCount);
    const grapesForWinePercentage = 40;

    let harves = landSize*grapesPerSquareMeter;
    let harvestForWine = (harves*grapesForWinePercentage/100);
    let wineProduced = harvestForWine/2.5;
    let result;

    if(wineProduced<wineNeeded){
        result = `It will be a tough winter! More ${Math.floor(wineNeeded-wineProduced)} liters wine needed.`;
    }
    else {
        result = `Good harvest this year! Total wine: ${Math.floor(wineProduced)} liters.\n${Math.ceil(wineProduced-wineNeeded)} liters left -> ${Math.ceil(wineProduced-wineNeeded)/workersCount} liters per person.`;
    }

    console.log(result);

}

Harvest([650, 2, 175, 3]);
Harvest([1020, 1.5, 425, 4]);
Harvest([10,0.00,10,1]);
Harvest([5000,10.00,600,20]);



/*
Задача: реколта
От лозе с площ X квадратни метри се заделя 40% от реколтата за производство на вино. От 1 кв.м. лозе се изкарват Y килограма грозде. За 1 литър вино са нужни 2,5 кг. грозде. Желаното количество вино за продан е Z литра.
Напишете програма, която пресмята колко вино може да се произведе и дали това количество е достатъчно. Ако е достатъчно, остатъкът се разделя по равно между работниците на лозето.
Входни данни
Входът, който програмата прочита се състои от точно 4 реда (аргумента):
• 1-ви ред (аргумент): X кв.м е лозето – цяло число в интервала [10 … 5000].
• 2-ри ред (аргумент): Y грозде за един кв.м. – реално число в интервала [0.00 … 10.00].
• 3-ти ред (аргумент): Z нужни литри вино – цяло число в интервала [10 … 600].
• 4-ти ред (аргумент): брой работници – цяло число в интервала [1 … 20].
Изходни данни
На конзолата трябва да се отпечата следното:
• Ако произведеното вино е по-малко от нужното:
o “It will be a tough winter! More {недостигащо вино} liters wine needed.” * Резултатът трябва да е закръглен към по-ниско цяло число.
• Ако произведеното вино е повече от нужното:
o “Good harvest this year! Total wine: {общо вино} liters.” * Резултатът трябва да е закръглен към по-ниско цяло число.
o “{Оставащо вино} liters left -> {вино за 1 работник} liters per person.” * И двата резултата трябва да са закръглени към по-високото цяло число.

Примерен вход и изход
Вход 1020 1.5 425 4  Изход It will be a tough winter! More 180 liters wine needed.
Вход 650 2 175 3  Изход Good harvest this year! Total wine: 208 liters. 33 liters left -> 11 liters per person.

*/

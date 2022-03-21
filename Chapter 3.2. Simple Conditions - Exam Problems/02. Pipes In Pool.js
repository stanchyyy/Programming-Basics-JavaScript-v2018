function PipesInPool([argPoolVolume,argPipeOneVolume,argPipeTwoVolume,argHoursAway]){
    //read input section
    let poolVolume = parseInt(argPoolVolume);
    let pipeOneVolume = parseInt(argPipeOneVolume);
    let pipeTwoVolume = parseInt(argPipeTwoVolume);
    let hoursAway = parseFloat(argHoursAway);
    
    let overflowVolume;
    let pipeVolumeFlow = (pipeOneVolume+pipeTwoVolume)*hoursAway;
    let pipeOneContribution = Math.trunc(((pipeOneVolume*hoursAway)/pipeVolumeFlow)*100);
    let pipeTwoContribution = Math.trunc(((pipeTwoVolume*hoursAway)/pipeVolumeFlow)*100);
    let volumePercentage = Math.trunc(( pipeVolumeFlow/poolVolume)*100);
    let result = `The pool is ${volumePercentage}% full. Pipe 1: ${pipeOneContribution}%. Pipe 2: ${pipeTwoContribution}%.`;

    if(pipeVolumeFlow>poolVolume){
        overflowVolume = pipeVolumeFlow-poolVolume;
        result = `For ${hoursAway} hours the pool overflows with ${overflowVolume} liters.`;
    }


    console.log( result);
}

PipesInPool([1, 1, 1, 1.0]);



/*
Задача: тръби в басейн
Басейн с обем V има две тръби, от които се пълни. Всяка тръба има определен дебит (литрите вода, минаващи през една тръба за един час). Работникът пуска тръбите едновременно и излиза за N часа. Напишете програма, която изкарва състоянието на басейна, в момента, когато работникът се върне.
Входни данни
На функцията се подават четири числа (аргумента):
• Първият ред (аргумент) съдържа числото V – обем на басейна в литри – цяло число в интервала [1 … 10000].
• Вторият ред (аргумент) съдържа числото P1 – дебит на първата тръба за час – цяло число в интервала [1 …5000].
• Третият ред (аргумент) съдържа числото P2 – дебит на втората тръба за час – цяло число в интервала [1 … 5000].
• Четвъртият ред (аргумент) съдържа числото H – часовете, в които работникът отсъства – число с плаваща запетая в интервала [1.0 … 24.00].
Изходни данни
Да сеотпечата на конзолата едно от двете възможни състояния:
• До колко се е запълнил басейнът и коя тръба с колко процента е допринесла. Всички проценти да се форматират до цяло число (без закръгляне).
o "The pool is [x]% full. Pipe 1: [y]%. Pipe 2: [z]%."
• Ако басейнът се е препълнил – с колко литра е прелял за даденото време, число с плаваща запетая.
o "For [x] hours the pool overflows with [y] liters."
Имайте предвид, че поради закръглянето до цяло число се губят данни и e нормално сборът на процентите да е 99%, а не 100%.

Примерен вход и изход
 Вход 1000 100 120 3 Изход Thee pool is 66% full. Pipe 1: 45%. Pipe2: 54%.
Вход  100 100 100 2.5 Изход For 2.5 hours the pool overflows with 400 liters.

*/
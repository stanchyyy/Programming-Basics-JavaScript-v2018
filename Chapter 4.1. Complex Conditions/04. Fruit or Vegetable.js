function FruitOrVegetable([arg1]){
    let input = arg1;
    let result;
    if(input==="banana" || input==="apple" || input==="kiwi" || input==="cherry" || input==="lemon" || input==="grapes" ){
        result="fruit";
    }
    else if(input==="tomato" || input==="cucumber" || input==="pepper" || input==="carrot"){
        result="vegetable";
    }
    else {
        result="unknown";
    }

    console.log(result);

}

FruitOrVegetable(["banana"]);
FruitOrVegetable(["tomato"]);
FruitOrVegetable(["kiwi"]);
FruitOrVegetable(["java"]);



/*
Пример: плод или зеленчук
Нека проверим дали даден продукт е плод или зеленчук. Плодовете "fruit" са banana, apple, kiwi, cherry, lemon и grapes. Зеленчуците "vegetable" са tomato, cucumber, pepper и carrot. Всички останали са "unknown".

Примерен вход и изход
Вход  banana tomato kiwi java Изход  fruit vegetable fruit unknown


*/
function AnimalType([arg_animal]){
    let anumal = arg_animal.toLowerCase();
    let result;


    switch(anumal){
        case "dog" : result= "mammal";
        break;
        case "crocodile":
        case "tortoise":
        case "snake":
            result="reptile";
        break;

        default : result = "unknown";
    }

    console.log(result);
    
}

AnimalType(["tortoise"]);
AnimalType(["dog"]);
AnimalType(["elephant"]);

/*
Пример: вид животно
Напишете програма, която принтира вида на животно според името му:
• dog -> mammal
• crocodile, tortoise, snake -> reptile
• others -> unknown
Примерен вход и изход
Вход tortoise Изход reptile
Вход dog Изход mammal
Вход elephant Изход unknown
*/
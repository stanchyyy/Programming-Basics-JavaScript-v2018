function SmallShop([arg_product,arg_city,arg_quantity]){
    let city = arg_city.toLowerCase();
    let product = arg_product.toLowerCase();
    let quantity = Number(arg_quantity);
    let result;

    if(city==="sofia"){
        if(product==="coffee"){
            result=quantity*0.50;
        }
        else if(product==="water"){
            result=quantity*0.80;
        }
        else if(product==="beer"){
            result=quantity*1.20;
        }
        else if(product==="sweets"){
            result=quantity*1.45;
        }
        else if(product==="peanuts"){
            result=quantity*1.60;
        }
    }
    else if(city==="plovdiv"){
        if(product==="coffee"){
            result=quantity*0.40;
        }
        else if(product==="water"){
            result=quantity*0.70;
        }
        else if(product==="beer"){
            result=quantity*1.15;
        }
        else if(product==="sweets"){
            result=quantity*1.30;
        }
        else if(product==="peanuts"){
            result=quantity*1.50;
        }
    }
    else if(city==="varna"){
        if(product==="coffee"){
            result=quantity*0.45;
        }
        else if(product==="water"){
            result=quantity*0.70;
        }
        else if(product==="beer"){
            result=quantity*1.10;
        }
        else if(product==="sweets"){
            result=quantity*1.35;
        }
        else if(product==="peanuts"){
            result=quantity*1.55;
        }
    }
    result = result.toFixed(2);
    console.log(result);
}

SmallShop(["coffee", "Varna", 2]);
SmallShop(["peanuts", "Plovdiv", 1]);
SmallShop(["beer", "Sofia", 6]);
SmallShop(["water", "Plovdiv", 3]);
SmallShop(["sweets","Varna",10]);

/*
Пример: квартално магазинче
Предприемчив българин отваря по едно квартално магазинче в няколко града с различни цени за следните продукти: продукт / град Sofia Plovdiv Varna coffee water beer sweets peanuts 0.50 0.80 1.20 1.45 1.60 0.40 0.70 1.15 1.30 1.50 0.45 0.70 1.10 1.35 1.55
По даден град (стринг), продукт (стринг) и количество (десетично число) да се пресметне цената.
Примерен вход и изход
Вход  coffee Varna 2  Изход   0.9
Вход peanuts Plovdiv 1 Изход   1.5
Вход water Plovdiv 3 Изход 2.1
Вход beer Sofia 6 Изход 7.2
*/
function HotelRoom([arg_Month,arg_Days]){
    let appartmentPrice;
    let studioPrice;
    let appartmentPricePerDay;
    let studioPricePerDay;
    let appartmentDiscount = 0.00;
    let studioDiscount = 0.00;

    switch(arg_Month){
        case "May":
        case "October":{
            studioPricePerDay = 50;
            appartmentPricePerDay = 65;
            if(arg_Days>7 && arg_Days<15){
                studioDiscount = 5;
            }
            else if(arg_Days>14){
                studioDiscount = 30;
                appartmentDiscount = 10;
            }
            break;

        }
        case "June":
        case "September" : {
            studioPricePerDay = 75.20;
            appartmentPricePerDay = 68.70;
            if(arg_Days>14){
                studioDiscount = 20;
                appartmentDiscount = 10;
            }
            break;
        }
        case "July":
        case "August" :  {
            studioPricePerDay = 76;
            appartmentPricePerDay = 77;
            if(arg_Days>14){
                appartmentDiscount = 10;
            }
            break;
        }
    }


    appartmentPrice = ((arg_Days*appartmentPricePerDay)-((arg_Days*appartmentPricePerDay*appartmentDiscount)/100)).toFixed(2);
    studioPrice = ((arg_Days*studioPricePerDay)-((arg_Days*studioPricePerDay*studioDiscount)/100)).toFixed(2);

    console.log(`Apartment: ${appartmentPrice} lv.`);
    console.log(`Studio: ${studioPrice} lv.`);
}

HotelRoom(["June", 14]);
HotelRoom(["August", 20]);
HotelRoom(["May", 15]);

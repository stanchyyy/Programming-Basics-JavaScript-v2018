function GroceryMarket([priceVegetables,priceFruits,kgVegetables,kgFruits]){
    const euroRate = 1.94;
    let earnFromVegetables = parseFloat(priceVegetables)*parseInt(kgVegetables);
    let earnFromFruits = parseFloat(priceFruits)*parseInt(kgFruits);
    let earningsInEur = (earnFromVegetables+earnFromFruits)/euroRate;
    console.log(earningsInEur);
}

GroceryMarket([0.194,19.4,10,10]);
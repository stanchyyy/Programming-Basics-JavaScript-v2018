function GreatestCommonDivisor([arg_a,arg_b]){
    let a = parseInt(arg_a);
    let b = parseInt(arg_b);
    while (b!==0) {
        let oldB = b;
        b = a%b;
        a = oldB;

    }
    console.log(`GDC = ${+a}`);

}

GreatestCommonDivisor([24, 16]);
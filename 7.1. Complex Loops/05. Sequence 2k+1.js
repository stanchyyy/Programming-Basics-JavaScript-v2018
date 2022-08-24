function Sequence2k1([arg_number]){
    let number = parseInt(arg_number);
    let nodeMember = 1;
    while (number >=nodeMember) {
        console.log(nodeMember);
        nodeMember=(nodeMember*2)+1;
    }

}

Sequence2k1([31]);
Sequence2k1([55]);


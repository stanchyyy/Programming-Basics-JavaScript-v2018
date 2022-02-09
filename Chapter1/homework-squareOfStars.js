
function Solve([n]){

    for(let i=0;i<n;i++){
        let rowToPrint = "";
        for(let j =0; j<n; j++){
            if(i===0||i===n-1){
            rowToPrint+="*";
            }
            else{
                if(j===0||j===n-1){
                    rowToPrint+="*";
                }
                else{
                    rowToPrint+=" ";
                }
            }
        }
        console.log(rowToPrint);
    }
}

Solve([3]);
Solve([4]);
Solve([5]);
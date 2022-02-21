function ExcellentOrNot([grade]){
let gradeReceived = parseFloat(grade);
if(gradeReceived>=5.5){
    console.log("Excellent!");
}
else{
    console.log("Not excellent.")
}
}

ExcellentOrNot([5.50]);
ExcellentOrNot([5.40]);

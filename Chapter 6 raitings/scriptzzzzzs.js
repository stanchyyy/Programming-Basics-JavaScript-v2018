function DrawRating(rating){
    let html = "";
    let allStars = 10;
    let fullStarts = Math.floor(rating/allStars);
    let emptyStars = Math.floor((100-rating)/allStars);
    let halfStars = allStars-fullStarts-emptyStars;
    for(let i=0;i<fullStarts;i++){
        html+='<img src="./img/full-star.png">';
    }
    for(let i=0;i<halfStars;i++){
        html+='<img src="./img/half-star.png">';
    }
    for(let i=0;i<emptyStars;i++){
        html+='<img src="./img/empty-star.png">';
    }
    return html;
}

function DrawHandler(){
    let ratingInput = document.getElementById('input-rating');
    let rating = parseInt(ratingInput.value);
    let ratingHolder = document.getElementById('ratingHolder');
    let html = DrawRating(rating);
    ratingHolder.innerHTML=html;
}

function AppInit(){
    let button = document.getElementById('input-draw');
    button.addEventListener("click",DrawHandler);
    DrawHandler();
}

document.addEventListener("DOMContentLoaded",AppInit());
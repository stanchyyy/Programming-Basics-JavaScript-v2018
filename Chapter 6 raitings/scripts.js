document.addEventListener("DOMContentLoaded", AppInit);

function AppInit(){
    let button = document.getElementById("rating-submit");
    button.addEventListener("click", DrawHandler);
    DrawHandler();

}

function DrawHandler(){
    let inputRating = document.getElementById("rating-input");
    let ratingContainer = document.getElementById("ratings-container");
    let rating = inputRating.value;
    let html = Draw(rating);
    ratingContainer.innerHTML=html;
    

}

function Draw(rating){
    let html="";
    let allStars = 10;
    let fullStars = Math.floor((rating/100)*10);
    let emptyStars = Math.floor((100-rating)/10);
    let halfStars = allStars-fullStars-emptyStars;

    for(let i =0; i<fullStars;i++){
        html+="<img src='./img/full-star.png'>";
    }
    for(let i=0;i<halfStars;i++){
        html+="<img src='./img/half-star.png'>"
    }
    for(let i=0;i<emptyStars;i++){
        html+="<img src='./img/empty-star.png'>"
    }
    return html;
}
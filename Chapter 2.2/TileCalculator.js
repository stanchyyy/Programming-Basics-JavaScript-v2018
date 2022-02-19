function TileCalculator([N,W,L,M,O]){
    const timeToApplyTile = 0.2;
    let area = parseInt(N)* parseInt(N);
    let tile = parseFloat(W)* parseFloat(L);
    let bench = parseFloat(M)*parseFloat(O);
    let tilesNeeded = (area - bench)/tile;
    let timeNeeded = tilesNeeded*timeToApplyTile;
    console.log(Math.round(tilesNeeded*100)/100);
    console.log(Math.round(timeNeeded*100)/100);

}

TileCalculator([20, 5, 4, 1, 2]);
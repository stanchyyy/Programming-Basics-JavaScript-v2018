function studyHall([i,w]){
    const deskWidth = 0.70;
    const deskHeight = 1.20;
    /*3 desks can't be occupied due to the door and the teacher's desk */
    const doorAndteacherOccupancy = 3;
    let widthWithWalkingCompensation = w-1;


    let columns = Math.floor(i/deskHeight);
    let rows = Math.floor( widthWithWalkingCompensation/deskWidth);
    
    console.log((columns*rows)-doorAndteacherOccupancy);

}

studyHall([15,8.9]);
studyHall([8.4,5.2]);
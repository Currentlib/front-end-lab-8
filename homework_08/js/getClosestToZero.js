function getClosestToZero(massive) {
    let closest = massive[0];
    for (let j=0; j<massive.length; j++) {
        if (Math.abs(closest)>Math.abs(massive[j+1])) {
            closest=massive[j+1];
        }
    }
    return closest;
}

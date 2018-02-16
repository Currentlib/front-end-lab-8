function getMin (massive) {
    let minimum = massive[0];
    for (let j=0; j<massive.length; j++) {
        if (minimum>massive[j]) {
            minimum=massive[j];
        }
    }
    return minimum;
}

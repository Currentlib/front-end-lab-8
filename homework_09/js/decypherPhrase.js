function decypherPhrase(objective, word) {
    let decyphObjective = {};
    for (let i in objective) {
        decyphObjective[objective[i]] = i;
    }
    return cypherPhrase(decyphObjective, word);
}

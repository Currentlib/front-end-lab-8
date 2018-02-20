function cypherPhrase(objective, word) {
    let splitter = word.split('');
    splitter = getTransformedArray(splitter, function(item) {
        let returned = objective[item] || item;
        return returned;
    });
    return splitter.join('');
}

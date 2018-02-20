function getTransformedArray (mass, func) {
    let new_mass = []
    forEach(mass, function(item) {
        new_mass.push(func(item));
    });
    return new_mass;
}

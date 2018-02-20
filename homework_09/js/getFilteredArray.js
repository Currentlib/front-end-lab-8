function getFilteredArray (mass, func) {
    let new_array = [];
    forEach(mass, function(item) {
        if (func(item)) {
            new_array.push(item);
        }
    })
    return new_array;
};

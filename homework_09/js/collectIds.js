function collectIds(movies) {
    let new_movies = [];
    new_movies = getFilteredArray(movies, function(item) {
        if (item.rating > 3) {
            return item.id;
        };
    });
    new_movies = getTransformedArray(new_movies, function(item) {
        return item.id;
    })
    return new_movies;
}

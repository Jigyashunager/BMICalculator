const movies = [];

function favouriteMovie(operation, movie) {
    // Write your code here
    if (operation === "add") {
        movies.push(movie)
    }
    if (operation === "remove") {
        if (movies.length > 0){
            movies.pop()
        }
    }
    return movies
}

module.exports = favouriteMovie;

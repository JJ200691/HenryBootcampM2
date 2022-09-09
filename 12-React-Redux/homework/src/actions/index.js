const apiKey = "74e75b21";

export function addMovieFavorite(payload) {
    return {
        type: "ADD_MOVIE_FAVORITE",
        payload
    };
}

export function getMovies(titulo) {
    return (dispatch) => fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${titulo}`)
        .then(response => response.json())
        .then(json => {
            dispatch({ type: "GET_MOVIES", payload: json });
        });
}

export function getMovieDetail(idMovie) {
    return (dispatch) => fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${idMovie}`)
        .then(response => response.json())
        .then(json => {
            dispatch({ type: "GET_MOVIE_DETAIL", payload: json })
        })
}

export function removeMovieFavorite(id) {
    return {
        type: "REMOVE_MOVIE_FAVORITE",
        payload: id,
    }
}
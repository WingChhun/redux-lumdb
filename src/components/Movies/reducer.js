import {RESET_MOVIE, GET_MOVIES, GET_MOVIE} from "./constants";

const defaultState = {
    movies: [],
    movie: {},
    moviesLoaded: false,
    movieLoaded: false,
    moviesLaodedAt: ''
}
export default function (prevState = defaultState, action) {

    const {type, payload} = action;

    switch (type) {

        case GET_MOVIES:

            return {

                ...prevState,
                movies: payload,
                moviesLoaded: true,
                moviesLoadedAt: new Date()
            }

        case GET_MOVIE:
            return {
                ...prevState,
                movie: payload,

                movieLaoded: true
            }

            //TODO: Clear reset movie to prevent delay
        case RESET_MOVIE:
            return {
                ...prevState,
                movie: {},
                moviesLoaded: false,
                movieLoaded: false
            }
        default:
            return defaultState;
    }

}
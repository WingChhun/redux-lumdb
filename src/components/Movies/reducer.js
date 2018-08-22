import {RESET_MOVIE, GET_MOVIES, GET_MOVIE} from "./constants";

const defaultState = {
    movies: [],
    movie: {},
    moviesLoaded: false
}
export default function (prevState = defaultState, action) {

    const {type, payload} = action;

    switch (type) {

        case GET_MOVIES:

            return {

                ...prevState,
                movies: payload,
                moviesLoaded: true
            }

        case GET_MOVIE:
            return {
                ...prevState,
                movie: payload,
                moviesLoaded: true
            }

            //TODO: Clear reset movie to prevent delay
        case RESET_MOVIE:
            return {
                ...prevState,
                movie: {},
                moviesLoaded: false
            }
        default:
            return defaultState;
    }

}
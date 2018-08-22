import {GET_MOVIES} from "./constants";

const defaultState = {
    movies: [],
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

        default:
            return defaultState;
    }

}
import {GET_MOVIES} from "./constants";

const defaultState = {
    movies: []
}
export default function (prevState = defaultState, action) {

    const {type, payload} = action;

    switch (type) {

        case GET_MOVIES:

            return {

                ...prevState,
                movies: payload
            }

        default:
            return defaultState;
    }

}
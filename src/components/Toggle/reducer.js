import {TOGGLE_MESSAGE, GET_MOVIES} from "./constants";
const defaultState = {
    messageVisibility: false,
    movies: []
};

//TODO: Export a default reducer
export default function (prevState = defaultState, action) {

    const {type, payload} = action;
    switch (type) {

        case TOGGLE_MESSAGE:

            return {
                ...prevState,
                messageVisibility: !prevState.messageVisibility
            }

        case GET_MOVIES:

            return {
                ...prevState,
                movies: payload
            }

        default:

            return prevState;

    }

}
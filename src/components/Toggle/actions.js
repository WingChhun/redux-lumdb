import thunk from 'redux-thunk';
import {TOGGLE_MESSAGE, API_KEY, GET_MOVIES} from "./constants.js";

export const toggleMessage = () => {

    return {type: TOGGLE_MESSAGE};

}

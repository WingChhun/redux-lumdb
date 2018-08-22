import {TOGGLE_MESSAGE} from "./constants";
const defaultState = {
    messageVisibility: false

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

        default:

            return prevState;

    }

}
const defaultState = {
    messageVisibility: false
};

//TODO: Export a default reducer
export default function (prevState = defaultState, action) {

    switch (action.type) {

        case 'TOGGLE_MESSAGE':

            return {
                ...prevState,
                messageVisibility: !prevState.messageVisibility
            }

        default:

            return prevState;

    }

}
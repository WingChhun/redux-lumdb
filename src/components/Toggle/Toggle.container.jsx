import {connect} from 'react-redux';
import Toggle from "./Toggle";
import {TOGGLE_MESSAGE} from './constants.js'
import {toggleVisibility} from "./actions";

const mapStateToProps = (prevState) => {
    return {message: prevState.message, messageVisibility: prevState.message.messageVisibility}

}

const mapDispatchToProps = (dispatch, ownProps) => {

    return {
        toggleVisibility: () => {
            dispatch({type: TOGGLE_MESSAGE});
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Toggle);
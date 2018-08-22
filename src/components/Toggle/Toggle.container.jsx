import {connect} from 'react-redux';
import Toggle from "./Toggle";
import {TOGGLE_MESSAGE} from './constants.js'
import {toggleMessage} from "./actions";
import {bindActionCreators} from 'redux';

const mapStateToProps = (prevState) => {
    return {message: prevState.message, messageVisibility: prevState.message.messageVisibility}

}

const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators({
    toggleMessage: toggleMessage
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Toggle);
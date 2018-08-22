import React, {Component} from 'react';
import {connect} from 'react-redux'
import {TOGGLE_MESSAGE} from './constants.js'

class Toggle extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            messageVisibility: props.messageVisibility
        }

    }

    componentWillReceiveProps = props => {
        this.setState({messageVisibility: props.messageVisibility})
    }

    render()
    {

        const {messageVisibility} = this.state;

        return (

            <div>

                {messageVisibility && <p>Action toggled</p>}

                <button id="btn" onClick ={this.props.toggleVisibility}>Toggle Me</button>

            </div>
        )
    }
}

//TODO: Connect to Redux
export default Toggle;
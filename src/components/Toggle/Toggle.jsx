import React, {Component} from 'react';
import {connect} from 'react-redux'

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
        const {toggleMessage, getMovies} = this.props;

        return (

            <div>

                {messageVisibility && <p>Action toggled</p>}

                <button id="btn" onClick ={toggleMessage}>Toggle Me</button>
                <button onClick={getMovies}>
                    Load Movies</button>
            </div>
        )
    }
}

//TODO: Connect to Redux
export default Toggle;
/* eslint react/no-did-mount-set-state: 0 */
import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import {createStore} from 'redux'; //*New

import logo from './logo.svg';
import './App.css';

import MoviesList from './MoviesList';
import MovieDetail from './MovieDetail';
const App = () => (
    <Router>
        <div className="App">
            <header className="App-header">
                <Link to="/">
                    <img src={logo} className="App-logo" alt="logo"/>
                </Link>
            </header>
            <Switch>
                <Route exact path="/" component={MoviesList}/>
                <Route path="/:id" component={MovieDetail}/>
            </Switch>
        </div>
    </Router>
);

export default App;

//TODO: Create a new reducer

const defaultState = {

    welcome: "Hello starter",
    otherState: 'some stuff'
}

const hello = (prevState = defaultState, action) => {

    //* Reducer
    switch (action.type) {
        case 'GREET_ME':

            return {
                ...prevState,
                welcome: "hello james",
                data: action.payload
            }
        case 'GREET_WORLD':

            return {
                ...prevState,
                welcome: 'hello world'
            }

        default:

            return prevState;
    }
};

const store = createStore(hello);

const data = "hello";
store.dispatch({type: 'GREET_ME', payload: data});
console.log('store', store.getState());

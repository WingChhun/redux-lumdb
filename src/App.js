import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import logger from 'redux-logger';

import logo from './logo.svg';
import './App.css';

import thunk from 'redux-thunk';
import MoviesListContainer from './components/Movies/MoviesList.container.jsx';
import MovieDetailContainer from './components/Movies/MovieDetail.container.jsx';
import ToggleContainer from "./components/Toggle/Toggle.container";
import rootReducer from "./rootReducer";

//TODO: rootReducer , initialState, middleWare, composeWithDevtools

const middleware = [logger, thunk];
const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(...middleware)));

const App = () => (
    <Provider store ={store}>
        <Router>
            <div className="App">
                <header className="App-header">
                    <Link to="/">
                        <img src={logo} className="App-logo" alt="logo"/>
                    </Link>
                </header>
                <ToggleContainer/>
                <Switch>
                    <Route exact path="/" component={MoviesListContainer}/>
                    <Route path="/:id" component={MovieDetailContainer}/>
                </Switch>
            </div>
        </Router>
    </Provider>
);
export default App;
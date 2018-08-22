import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {save, load} from 'redux-localstorage-simple';

import MoviesListContainer from './components/Movies/MoviesList.container.jsx';
import MovieDetailContainer from './components/Movies/MovieDetail.container.jsx';
import ToggleContainer from "./components/Toggle/Toggle.container";
import rootReducer from "./rootReducer";

import logo from './logo.svg';
import './App.css';
//TODO: rootReducer , initialState, middleWare, composeWithDevtools

const middleware = [logger, thunk];
const store = createStore(rootReducer, load(), composeWithDevTools(applyMiddleware(...middleware, save())));

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
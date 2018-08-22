import {combineReducers} from 'redux';
import message from "./components/Toggle/reducer";
import movies from "./components/Movies/reducer";

const rootReducer = combineReducers({message, movies})

export default rootReducer;
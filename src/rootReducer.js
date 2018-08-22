import {combineReducers} from 'redux';
import message from "./components/Toggle/reducer";
//import Movies from "./components/Movie/reducer";

const rootReducer = combineReducers({message})

export default rootReducer;
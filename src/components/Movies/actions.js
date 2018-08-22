import thunk from 'redux-thunk';
import {GET_MOVIES} from "./constants.js";

//TODO: Redux thunk allows us to returna  function
export const getMovies = () => {

    //TODO: Return async function

    return async function (dispatch) {

        const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=65e043c24785898be00b4abc12fc' +
                'daae&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=fa' +
                'lse&page=1');
        const movies = await res.json();

        return dispatch({type: GET_MOVIES, payload: movies.results})
    }

}
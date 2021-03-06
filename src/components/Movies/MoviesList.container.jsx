import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getMovies} from "./actions";
import MoviesList from "./MoviesList.jsx";

const mapStateToProps = (prevState, ownProps) => {

    const movies = prevState.movies.movies;

    return {moviesLoadedAt: prevState.movies.moviesLoadedAt, movies: movies, isLoaded: prevState.movies.moviesLoaded}

}

const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators({
    getMovies: getMovies
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getMovies} from "./actions";
import MoviesList from "./MoviesList";

const mapStateToProps = (prevState, ownProps) => {

    return {movies: prevState.movies.movies}

}

const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators({
    getMovies: getMovies
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getMovie, resetMovie} from "./actions";

import MovieDetail from "./MovieDetail.jsx";

const mapStateToProps = (prevState, ownProps) => {
    return {movie: prevState.movies.movie, isLoaded: prevState.movies.moviesLoaded}
};
const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators({
    getMovie: getMovie,
    resetMovie
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);
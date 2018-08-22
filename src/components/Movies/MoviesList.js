/* eslint react/no-did-mount-set-state: 0 */
import React, {PureComponent} from 'react';
import styled from 'styled-components';
import Movie from './Movie';

class MoviesList extends PureComponent {

    constructor(props)
    {
        super(props);

        this.state = {
            movies: []
        }
    }

    componentWillMount = () => {
        this
            .props
            .getMovies();
    }

    componentWillReceiveProps = props => {
        this.setState({movies: props.movies})

    }

    render() {

        const {movies} = this.state;

        return (
            <MovieGrid>
                {movies && movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </MovieGrid>
        );
    }
}

export default MoviesList;

const MovieGrid = styled.div `
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 1rem;
`;

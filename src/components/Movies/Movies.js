import React, { Component } from 'react';
import MoviesList from './MoviesTable/MoviesTable';
import axios from 'axios';
import shortid from 'shortid';

class Movies extends Component {
    state = {
        movies: null,
        formFields: null
    }

    componentDidMount() {
        axios.get('https://api.myjson.com/bins/1tll6')
            .then(response => {
   
                const newMovies = response.data.values.map((movie) => {
                    return {
                        ...movie,
                        id: shortid.generate()
                    }
                });
                const newFormField = response.data.fields.map((field) => {
                    return {
                        ...field,
                        id: shortid.generate()
                    }
                });

                this.setState({ 
                    movies: newMovies, 
                    formFields: newFormField
                });

            }).catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <MoviesList moviesList={this.state.movies}/>
        );
    }
}

export default Movies;
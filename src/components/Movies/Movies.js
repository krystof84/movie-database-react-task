import React, { Component } from 'react';
import MoviesTable from './MoviesTable/MoviesTable';
import Spinner from '../../ui/Spinner/Spnner';

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

        let moviesTable = <Spinner />;
        if(this.state.movies) {
            moviesTable = <MoviesTable moviesList={this.state.movies} moviesFields={this.state.formFields}/>;
        }

        return (
            <React.Fragment>
                
                {moviesTable}

            </React.Fragment>
        );
    }
}

export default Movies;
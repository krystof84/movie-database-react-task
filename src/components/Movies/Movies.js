import React, { Component } from 'react';
import MoviesTable from './MoviesTable/MoviesTable';
import Spinner from '../../ui/Spinner/Spnner';
import MoviesForm from './MoviesForm/MoviesForm';

import axios from 'axios';
import shortid from 'shortid';
import './Movies.scss';

class Movies extends Component {
    state = {
        movies: null,
        formFields: null,
        loading: true
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
                        id: shortid.generate(),
                        value: '',
                        sortOrder: 'none'
                    }
                });

                this.setState({
                    movies: newMovies,
                    formFields: newFormField,
                    loading: false
                });

            }).catch(error => {
                console.log(error);
            });
    }

    changeInputHandler(event, fieldId) {
        console.log(event.target.value);
        console.log('fieldId', fieldId);
    }

    render() {

        let moviesContent = <Spinner />;
        if(this.state.loading === false) {
            moviesContent = [
                <MoviesForm
                    key="moviesForm"
                    moviesFields={this.state.formFields}
                    changed={(event, fieldId) => this.changeInputHandler(event, fieldId)} />,
                <MoviesTable
                    key="moviesTable"
                    moviesList={this.state.movies}
                    moviesFields={this.state.formFields} />
            ];
        }

        return (
            <div className="Movies">
                {moviesContent}
            </div>
        );
    }
}

export default Movies;
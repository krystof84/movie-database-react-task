import React, { Component } from 'react';
import MoviesList from './MoviesList/MoviesList';
import axios from 'axios';
import shortid from 'shortid';

class Movies extends Component {
    state = {
        movies: null,
        formFields: null
    }

    addNewIdHandler = () => {

        this.setState({
            movies: this.state.movies.map((movie) => {
                return {
                    ...movie,
                    id: shortid.generate()
                }
            }),
            formFields: this.state.formFields.map((field) => {
                return {
                    ...field,
                    id: shortid.generate()
                }
            })
        });
    }

    componentDidMount() {
        axios.get('https://api.myjson.com/bins/1tll6')
            .then(response => {
   
                this.setState({ 
                    movies: response.data.values, 
                    formFields: response.data.fields
                    
                });
                this.addNewIdHandler();

            }).catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <React.Fragment>
                <MoviesList moviesList={this.state.movies}/>
            </React.Fragment>
        );
    }
}

export default Movies;
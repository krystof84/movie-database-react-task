import React from 'react';
import ListItem from './ListItem/ListItem';
import { Table } from 'reactstrap';

const moviesList = (props) => {
 
    let tableContent = null;

    if(props.moviesList) {
        tableContent = props.moviesList.map((movie) => {
            return (
                <ListItem 
                    name={movie.name} 
                    year={movie.year} 
                    duration={movie.duration}
                    genre={movie.genre}
                    rating={movie.rating}
                    key={movie.id}/>
            );
        });
    }

    return (
        <Table>
            <tbody>
                {tableContent}
            </tbody>
        </Table>
    );
    
}

export default moviesList;
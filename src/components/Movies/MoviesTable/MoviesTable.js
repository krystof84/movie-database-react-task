import React from 'react';
import RowItem from './RowItem/RowItem';
import { Table } from 'reactstrap';

const moviesList = (props) => {

    const tableHeader = props.moviesFields.map((field, index) => {
        return (
            <th key={index}>{field.label}</th>
        );
    });

    const tableContent = props.moviesList.map((movie) => {
        return (
            <RowItem
                name={movie.name}
                year={movie.year}
                genre={movie.genre}
                duration={movie.duration}
                rating={movie.rating}
                votes={movie.votes}
                key={movie.id}/>
        );
    });

    return (
        <Table striped bordered responsive>
            <thead>
                <tr>
                    {tableHeader}
                </tr>
            </thead>
            <tbody>
                {tableContent}
            </tbody>
        </Table>
    );

}

export default moviesList;
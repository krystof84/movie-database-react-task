import React from 'react';

const rowItem = (props) => {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.year}</td>
            <td>{props.genre}</td>
            <td>{props.duration}</td>
            <td>{props.rating}</td>
            <td>{props.votes}</td>
        </tr>
    );
}

export default rowItem;
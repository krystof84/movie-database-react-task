import React from 'react';

const listItem = (props) => {
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

export default listItem;
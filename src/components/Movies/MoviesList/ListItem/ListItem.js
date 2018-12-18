import React from 'react';

const listItem = (props) => {
    return (
        <tr>
            <td>
                {props.name}
            </td>
        </tr>
    );
}

export default listItem;
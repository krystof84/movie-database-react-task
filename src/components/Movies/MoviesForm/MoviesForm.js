import React from 'react';
import { Button, Form, Col, Row } from 'reactstrap';
import RowItem from './RowItem/RowItem';

import './MoviesForm.scss';

const moviesForm = (props) => {
    console.log(props.moviesFields);
    return(
        <Form className="MoviesForm">
            {props.moviesFields.map(movieField => (
                <RowItem
                    key={movieField.id}
                    field={movieField.field}
                    label={movieField.label}
                    inputType={movieField.type}
                    inputValue={movieField.value}
                    inputChange={(event) => props.changed(event, movieField.id)} />
            ))}

            <Row>
                <Col md={6}>
                    <span style={{fontWeight: 'bold'}}>Filters: </span>
                    <span className="InfoLabel">Title</span>
                    <span className="InfoLabel">Release date</span>
                </Col>
                <Col md={6}>
                    <span style={{fontWeight: 'bold'}}>Sort by: </span>
                    <span className="InfoLabel">Title ascending (A - Z)</span>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button color="success" style={{margin: '10px 0'}}>Check result</Button>
                </Col>
            </Row>
        </Form>
    );
}

export default moviesForm;
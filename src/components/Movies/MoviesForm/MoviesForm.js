import React from 'react';
import { Button, Form, FormGroup, Label, Input, Col, Row } from 'reactstrap';

import './MoviesForm.scss';

const moviesForm = (props) => {
    console.log(props);
    return(
        <Form className="MoviesForm">
            <Row className="MoviesFormRow">
                <Col md={6}>
                    <FormGroup row>
                        <Label for="title" xs={4}>Filter title:</Label>
                        <Col xs={8}>
                            <Input type="text" name="title" id="title"/>
                        </Col>
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup row>
                        <Label for="sortOrder" xs={3}>Sort order:</Label>
                        <Col xs={9}>
                            <Input type="select" name="sortOrder" id="sortOrder">
                                <option value="default">...</option>
                                <option value="asc">Ascending (A-Z)</option>
                                <option value="desc">Descending (Z-A)</option>
                            </Input>
                        </Col>
                    </FormGroup>
                </Col>
            </Row>
            <Row className="MoviesFormRow">
                <Col md={6}>
                    <FormGroup row>
                        <Label for="title" xs={4}>Filter release date:</Label>
                        <Col xs={8}>
                            <Input type="text" name="title" id="title"/>
                        </Col>
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup row>
                        <Label for="sortOrder" xs={3}>Sort order:</Label>
                        <Col xs={9}>
                            <Input type="select" name="sortOrder" id="sortOrder">
                                <option value="default">...</option>
                                <option value="asc">Ascending (A-Z)</option>
                                <option value="desc">Descending (Z-A)</option>
                            </Input>
                        </Col>
                    </FormGroup>
                </Col>
            </Row>
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
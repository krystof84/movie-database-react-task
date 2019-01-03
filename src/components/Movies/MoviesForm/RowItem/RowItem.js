import React from 'react';
import { Row, Col, FormGroup, Label, Input } from 'reactstrap';

const rowItem = (props) => (
    <Row className="MoviesFormRow">
        <Col md={6}>
            <FormGroup row>
                <Label for={props.field} xs={4}>
                    Filter {props.label.toLowerCase()}:
                </Label>
                <Col xs={8}>
                    <Input
                        type={props.inputType}
                        name={props.field}
                        id={props.field}
                        value={props.inputValue}
                        onChange={props.inputChange}/>
                </Col>
            </FormGroup>
        </Col>
        <Col md={6}>
            <FormGroup row>
                <Label for="sortOrder" xs={3}>Sort order:</Label>
                <Col xs={9}>
                    <Input type="select" name="sortOrder" id="sortOrder">
                        <option value="none">...</option>
                        <option value="asc">Ascending (A-Z)</option>
                        <option value="desc">Descending (Z-A)</option>
                    </Input>
                </Col>
            </FormGroup>
        </Col>
    </Row>
);

export default rowItem;
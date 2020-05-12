import React from "react";
import "./Form.css";
import { Col, Form } from "react-bootstrap";

const form = props => {
    return (
        <Col xs={6} md={6}>
            {props.page === 1 ? (
                <Form>
                    <Form.Group>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" />
                    </Form.Group>
                </Form>
            ) : null}
            {props.page === 2 ? (
                <Form>
                    <Form.Group>
                        <Form.Label>Gender: </Form.Label>
                        <Form.Check value="male" type="radio" />
                        Male
                        <Form.Check value="female" type="radio" />
                        Female
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Dob </Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Country</Form.Label>
                        <Form.Control as="select">
                            <option>India</option>
                            <option>Uk</option>
                            <option>Usa</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            ) : null}
            {props.page === 3 ? (
                <Form>
                    <Form.Group>
                        <Form.Label> Upload Profile Picture</Form.Label>
                        <Form.File.Input />
                    </Form.Group>
                </Form>
            ) : null}
        </Col>
    );
};

export default form;

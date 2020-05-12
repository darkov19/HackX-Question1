import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Container, Row } from "react-bootstrap";

class App extends Component {
    state = {
        page: 1,
        maxPage: 3,
        minPage: 1,
    };

    onNextHandler = () => {
        if (this.state.page < this.state.maxPage) {
            this.setState({ page: this.state.page + 1 });
        }
    };

    onPrevHandler = () => {
        if (this.state.page > this.state.minPage) {
            this.setState({ page: this.state.page - 1 });
        }
    };

    render() {
        let disabled = false;

        if (this.state.page === this.state.minPage) {
            disabled = true;
        }

        return (
            <Container className="container">
                <Row>
                    <Col xs={12} md={12}>
                        <h2 className="heading">Step {this.state.page}</h2>
                    </Col>
                    <Col xs={12} md={12}>
                        <Form page={this.state.page} />
                    </Col>
                </Row>
                <Row>
                    <Button
                        variant="danger"
                        disabled={disabled}
                        onClick={this.onPrevHandler}
                    >
                        Prev
                    </Button>
                    <Button onClick={this.onNextHandler}>
                        {this.state.page === this.state.maxPage
                            ? "Submit"
                            : "Next"}
                    </Button>
                </Row>
            </Container>
        );
    }
}

export default App;

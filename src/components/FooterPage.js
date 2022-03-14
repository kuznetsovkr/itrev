import React from "react";
import {Col, Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import logo from "../assets/Лого.svg"

const FooterPage = () => {
    return (
        <Container fluid style={{backgroundColor:'#2E2E2E', color: '#fff', padding: '40px'}}>
                <Row>
                    <Col className='align-self-center' >
                        <img
                            alt=""
                            src={logo}
                            width={80}
                        />
                    </Col>
                    <Col>
                        <p> itreviews@gmail.com</p>
                    </Col>
                </Row>
        </Container>
    );
}

export default FooterPage;
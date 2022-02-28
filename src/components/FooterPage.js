import React from "react";
import {Container} from "react-bootstrap";

const FooterPage = () => {
    return (
        <Container fluid style={{backgroundColor:'#2E2E2E', color: '#fff', height: 150}}>
            <Container style={{display:'flex', justifyContent: 'center', padding: '20px'}}>
                <p className='e_mail'> itreviews@gmail.com</p>
            </Container>
        </Container>
    );
}

export default FooterPage;
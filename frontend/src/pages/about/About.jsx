import React  from 'react';
import { Container, Row, Col  } from 'reactstrap';

import Navbar from '../../components/Navbar/Navbar';

export default props =>
<>
    <Container fluid>
        <Row>
            <Col sm={2} md={2} lg={2} className="p-0 nav">
                <Navbar />
            </Col>
            <Col sm={10} md={10} lg={10} className="p-0 main-context">
                <h1 className="title-page">Sobre</h1>
                <hr className="title-line"/>
                <Col sm={10} md={10} lg={10} className="content-container">
                    <p className="p-text-value">Trabalho desenvolvido para a máteria de Laboratório de Desenvolvimento</p> 
                </Col>
            </Col>
        </Row>
    </Container>
</>
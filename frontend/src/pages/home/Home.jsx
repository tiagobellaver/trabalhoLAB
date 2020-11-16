import React  from 'react';
import { Container, Row, Col, Table  } from 'reactstrap';

import Navbar from '../../components/Navbar/Navbar';
import './home.css';

export default props =>
<>
    <Container fluid>
        <Row>
            <Col sm={2} md={2} lg={2} className="p-0 nav">
                <Navbar />
            </Col>
            <Col sm={10} md={10} lg={10} className="p-0 main-context">
                <h1 className="title-page">Dashboard</h1>
                <hr className="title-line"/>
                <Col sm={10} md={10} lg={10} className="content-container">
                    <Table>
                        <thead>
                            <tr>
                                <th>HISTÓRICO</th>
                                <th>CARTÕES</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Teste</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Col>
        </Row>
    </Container>
</>
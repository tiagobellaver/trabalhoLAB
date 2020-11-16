import React  from 'react';
import { Container, Row, Col, Table } from 'reactstrap';
import './Historic.css';
import Navbar from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom'

export default props =>
<>
    <Container fluid>
        <Row>
            <Col sm={2} md={2} lg={2} className="p-0 nav">
                <Navbar />
            </Col>
            <Col sm={10} md={10} lg={10} className="p-0 main-context">
                <h1 className="title-page">Histórico</h1>
                <hr className="title-line"/>
                <Col sm={10} md={10} lg={10} className="content-container">
                    <Table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>APELIDO</th>
                                <th>DATA</th>
                                <th>STATUS</th>
                                <th>AÇÕES</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Teste</td>
                                <td>testinho</td>
                                <td>testando</td>
                                <td>
                                    <Link to="/historico-detalhe" type="button" className="link-option">Detalhes</Link>
                                    <Link to="/historico-detalhe" type="button" className="link-option-del">Excluir Registro</Link>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Col>
        </Row>
    </Container>
</>
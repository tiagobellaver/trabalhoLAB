import React  from 'react';
import { Link } from 'react-router-dom'
import {Container, Row, Col, CardImg } from 'reactstrap';
import Navbar from '../../components/Navbar/Navbar';
import { Image } from 'react-bootstrap';
export default props =>
<>
<Container fluid>
        <Row>
            <Col sm={2} md={2} className="p-0 nav">
                <Navbar />
            </Col>
            <Col Col sm={10} md={10} className="p-0 main-context">
                <div>
                    <h1 className="title-page">CARTÕES</h1>
                    <hr className="title-line"/>
                </div>     
                <div className="padd-dash content-container">
                    <div className="access-card flex-line">
                        <p className="p-text-title">Cartão do seu zé</p> 
                    </div>
                    <Container>
                        <Row className="user-details">
                            <Col Col>
                                <Image src="https://img.ibxk.com.br/materias/5866/21592.jpg?w=328" fluid/>
                            </Col>
                            <Col Col >
                                <ul className="user-card-list">
                                    <li className="card-item">
                                        <p className="p-text-title">Nome do usuário</p>
                                        <p className="p-text-value">Zé</p>
                                    </li>
                                    <li className="card-item">
                                        <p className="p-text-title">E-mail</p>
                                        <p className="p-text-value">ze@seuze</p>
                                    </li>
                                    <li className="card-item">
                                        <p className="p-text-title">Apelido do dispositvo</p>
                                        <p className="p-text-value">Cartão do seu ze</p>
                                    </li>
                                    <li className="card-item">
                                        <p className="p-text-title">Status</p>
                                        <p className="p-text-value">Ativo</p>
                                    </li>
                                    <li className="card-item">
                                        <p className="p-text-title">Autorizado</p>
                                        <p className="p-text-value">Sim</p>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                    <div className="options-card">
                        <p className="p-text-title">Ações</p>
                        <div className="flex-line">
                            <Link to="/cartoes" type="button" className="p-text-value mrg-link">Voltar</Link>
                            <Link to="/cartoes" type="button" className="p-text-value">Excluir Registro</Link>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
</>
import React  from 'react';
import {Container, Row, Col, Form, Label, FormGroup, Input  } from 'reactstrap';
import './Historic.css';
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar';
export default props =>
<>
    <Container fluid>
        <Row>
            <Col sm={2} md={2} className="p-0 nav">
                <Navbar />
            </Col>
            <Col Col sm={10} md={10} className="p-0 main-context">
                <div>
                    <h1 className="title-page">Histórico</h1>
                    <hr className="title-line"/>
                </div>
                <div className="padd-dash content-container">
                    <div className="access-card flex-line">
                        <p className="p-text-title">Acesso</p>
                        <p className="p-text-title">#00382</p>
                    </div>
                    <div className="user-details">
                        <ul className="user-card-list">
                            <li className="card-item">
                                <p className="p-text-title">Cartão</p>
                                <p className="p-text-value">Cartão do seu Zé</p>
                            </li>
                            <li className="card-item">
                                <p className="p-text-title">Usuário</p>
                                <p className="p-text-value">Zé</p>
                            </li>
                            <li className="card-item">
                                <p className="p-text-title">Data e Horário</p>
                                <p className="p-text-value">02/10/2020 ás 03:57</p>
                            </li>
                            <li className="card-item">
                                <p className="p-text-title">Tentivas</p>
                                <p className="p-text-value">1</p>
                            </li>
                            <li className="card-item">
                                <p className="p-text-title">Autorizado</p>
                                <p className="p-text-value">Sim</p>
                            </li>
                        </ul>
                    </div>
                    <div className="options-card">
                        <p className="p-text-title">Ações</p>
                        <div className="flex-line">
                            <Link to="/historico" type="button" className="p-text-value mrg-link">Voltar</Link>
                            <Link to="/historico" type="button" className="p-text-value">Excluir Registro</Link>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
</>
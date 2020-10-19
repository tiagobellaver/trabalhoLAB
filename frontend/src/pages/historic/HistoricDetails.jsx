import React  from 'react';
import {Container, Row, Col, Form, Label, FormGroup, Input  } from 'reactstrap';
import './Historic.css';
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar';
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
                    <div> 
                        <span>
                            <p className="details-titles"> <b>Acesso #blabla</b> </p>
                            <hr className="second-title-line"/>
                        </span>

                        <span>
                            <p className="details-titles"> <b>Cartão</b> </p>
                            <p className="details"> <b>Cartão do ze</b></p>
                        </span>
                        <span>
                            <p className="details-titles"> <b> Usuário</b> </p>
                            <p  className="details"> <b> ze</b> </p>
                        </span>
                        <span>
                            <p className="details-titles"><b>Data e Horário </b></p>
                            <p  className="details"> <b>02/10/2020 as 03:45</b></p>
                        </span>
                        <span>
                            <p className="details-titles"> <b>Tentativas</b></p>
                            <p  className="details"><b>1</b> </p>
                        </span>
                        <span>
                            <p className="details-titles"> <b>Autorizado</b></p>
                            <p  className="details"><b>Sim</b></p>
                        </span>
                        
                        <hr className="second-title-line"/>
                        <p className="details-titles"> <b>Acões</b></p>
                        <Link to="/historico" type="button" className="details-button">Voltar</Link>
                        <Link to="/historico-detalhe" type="button" className="details-button">Excluir Registro</Link>
                    </div>
                </Col>
            </Col>
        </Row>
    </Container>
</>
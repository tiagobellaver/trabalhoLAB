import React  from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input  } from 'reactstrap';
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
                <h1 className="title-page">ALTERAR CARTÃO</h1>
                <hr className="title-line"/>
                <Col sm={10} md={10} lg={10} className="content-container">
                    <div className="card-create-padding">
                        <Form>
                            <Container>
                                <Row>
                                    <Col>
                                        <FormGroup>
                                            <Label className="p-text-title" for="usarName" >Nome do Usuário</Label>
                                            <Input type="text" id="usarName"/>
                                        </FormGroup>
                                    </Col>
                                    <Col>
                                        <FormGroup>
                                            <Label className="p-text-title" for="email" >Email</Label>
                                            <Input type="email" id="email"/>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </Container>
                            <Container>
                                <Row>
                                    <Col>
                                        <FormGroup>
                                            <Label className="p-text-title" for="email" >Senha</Label>
                                            <Input type="password" id="email"/>
                                        </FormGroup>
                                    </Col>
                                    <Col>
                                        <FormGroup>
                                            <Label  className="p-text-title" for="exampleSelect">Tipo do Dispositivo</Label>
                                            <Input type="select" name="select" id="exampleSelect">
                                                <option>1</option>
                                                <option>2</option>
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                    <Col>
                                        <FormGroup>
                                            <Label className="p-text-title" for="nickname" >Apelido do Dispositivo</Label>
                                            <Input type="text" id="nickname"/>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </Container>
                            <Container>
                                <Row>
                                    <Col>
                                        <FormGroup>
                                            <Label  className="p-text-title" for="token" >Token Dispositivo</Label>
                                            <Input type="text" id="token"/>
                                        </FormGroup>
                                    </Col>
                                    <Col>
                                        <FormGroup>
                                            <Label className="p-text-title" for="status">Status</Label>
                                            <Input type="select" name="select" id="status">
                                                <option>1</option>
                                                <option>2</option>
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                    <Col>
                                        <FormGroup>
                                            <Label  className="p-text-title" for="photograph" >Foto</Label>
                                            <Input type="text" id="photograph"/>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </Container>
                        </Form>
                        <div className="button-centralizer">
                            <Link to="/cartoes" type="button" className="p-text-value mrg-link link-option">Cancelar</Link>
                            <Link to="/cartoes" type="button" className="p-text-value link-option">Salvar</Link>  
                        </div>
                    </div>
                </Col>
            </Col>
        </Row>
    </Container>
</>
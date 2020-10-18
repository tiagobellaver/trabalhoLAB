import React  from 'react';
import { Link } from 'react-router-dom'
import { Container, Row, Col, Form, Label, FormGroup, Input } from 'reactstrap';
import { Image } from 'react-bootstrap';

import './login.css';

import Login from '../../assets/login-header.svg';

import User from '../../assets/user.svg';
import Password from '../../assets/password.svg'

export default props =>
<>
    <Container>
        <Row className="justify-content-center">
            <Col lg={6} className="login-container">
                <Image src={Login} fluid/>
                <Form>
                    <Label className="label-login">Login</Label>
                    <FormGroup className="d-flex mb-4 login-form">
                        <Image src={User} fluid/>
                        <Input type="text" placeholder="Username"/>
                    </FormGroup>
                    <FormGroup className="d-flex mb-4 login-form">
                        <Image src={Password} />
                        <Input type="password" placeholder="Senha"/>
                    </FormGroup>
                    <FormGroup className="d-flex justify-content-center">
                        <Link to="/" type="button" className="login-button">Entrar</Link>
                    </FormGroup>
                </Form>
            </Col>
        </Row>
    </Container>
</>
import React  from 'react';
import { Container, Row, Col, Label } from 'reactstrap';
import { Image } from 'react-bootstrap';
import { ErrorMessage, Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { history } from '../../history';
import { Link } from 'react-router-dom'

import './login.css';

import LoginImage from '../../assets/login-header.svg';

import User from '../../assets/user.svg';
import Password from '../../assets/password.svg'

const Login = () => {

    const handleSubmit = values => {
        axios.post('http://localhost:8080/api/usuario/login', values)
        .then(resp => {
            const data = resp.data;
            if(data.loged) {
                localStorage.setItem('loged', true);
                localStorage.setItem('usuario', data.usuario)
                history.push('/');
            }
        })
    }
    const validations = yup.object().shape({
        email: yup.string().email().required(),
        senha: yup.string().min(5).required()
    })

    return (
        <>
            <Container>
                <Row className="justify-content-center">
                    <Col lg={6} className="login-container">
                        <Image src={LoginImage} fluid/>
                        <Formik initialValues={{}} onSubmit={handleSubmit} validationSchema={validations}>
                            <Form className="login-form">
                                <Label className="label-login">Login</Label>
                                <ErrorMessage component="span" name="email" className="form-error"></ErrorMessage>
                                <div className="form-group">
                                    <img src={User} alt="user-icon" />
                                    <Field name="email" type="text" className="form-field"/>
                                </div>
                                    
                                <ErrorMessage component="span" name="password" className="form-error"></ErrorMessage>
                                <div className="form-group">
                                    <img src={Password} alt="password-icon" />
                                    <Field name="senha" type="password" className="form-field"/>
                                </div>
                                   
                                <div className="form-group">
                                    <button className="login-button" type="submit">Entrar</button>
                                </div>
                            </Form>
                        </Formik>
                        <Link to='novo-usuario' className="new-user">Não tenho usuário</Link>
                    </Col>
                </Row>
            </Container>
        </>

    );
}
export default Login
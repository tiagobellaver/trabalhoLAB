import React  from 'react';
import { Container, Row, Col, Label } from 'reactstrap';
import { Image } from 'react-bootstrap';
import { ErrorMessage, Formik, Form, Field, yupToFormErrors} from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { history } from '../../history';

import './login.css';

import LoginImage from '../../assets/login-header.svg';

import User from '../../assets/user.svg';
import Password from '../../assets/password.svg'

const Login = () => {

    const handleSubmit = values => {
        axios.post('http://localhost:8080/api/usuario/login', values)
        .then(resp => {
            const { data } = resp
            if(data) {
                localStorage.setItem('app-token', data)
                history.push('/home')
            }
        })
    }
    const validations = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(5).required()
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
                                    <img src={User} />
                                    <Field name="email" type="text" className="form-field"/>
                                </div>
                                    
                                <ErrorMessage component="span" name="password" className="form-error"></ErrorMessage>
                                <div className="form-group">
                                    <img src={Password}/>
                                    <Field name="password" type="password" className="form-field"/>
                                </div>
                                   
                                <div className="form-group">
                                    <button className="login-button" type="submit">Entrar</button>
                                </div>
                            </Form>
                        </Formik>
                    </Col>
                </Row>
            </Container>
        </>

    );
}
export default Login
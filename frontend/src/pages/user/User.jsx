import React  from 'react';
import { Container, Row, Col, Label } from 'reactstrap';
import { ErrorMessage, Formik, Form, Field } from 'formik';
import { Image } from 'react-bootstrap';
import * as yup from 'yup';
import axios from 'axios';
import { history } from '../../history';

import LoginImage from '../../assets/login-header.svg';

const User = () => {

    const handleSubmit = values => {
        axios.post('http://localhost:8080/api/usuario/login', values)
        .then(resp => {
            const { data } = resp
            if(data) {
                localStorage.setItem('app-token', data)
                history.push('/')
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
                                
                                    <Field name="email" type="text" className="form-field"/>
                                </div>
                                    
                                <ErrorMessage component="span" name="password" className="form-error"></ErrorMessage>
                                <div className="form-group">
                                    
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
export default User
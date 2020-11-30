import React  from 'react';
import { Container, Row, Col, Label } from 'reactstrap';
import { ErrorMessage, Formik, Form, Field } from 'formik';
import { Image } from 'react-bootstrap';
import * as yup from 'yup';
import axios from 'axios';

import LoginImage from '../../assets/login-header.svg';

const User = () => {

    const handleCreate = values => {
        axios.post('http://localhost:8080/api/usuario/adicionar', values)
        .then(resp => {
            const { data } = resp
            console.log(resp)
            if(data) {
                localStorage.setItem('app-token', data)
            }
        })
    }
    const validations = yup.object().shape({
        nome: yup.string().required(),
        email: yup.string().email().required(),
        senha: yup.string().min(5).required()
    })

    return (
        <>
            <Container>
                <Row className="justify-content-center">
                <Col lg={6} className="login-container">
                        <Image src={LoginImage} fluid/>
                        <Formik initialValues={{}} onSubmit={handleCreate} validationSchema={validations}>
                            <Form className="login-form">
                                <Label className="label-login">Login</Label>
                                
                                <ErrorMessage component="span" name="email" className="form-error"></ErrorMessage>
                                <div className="form-group">
                                    <Label className="p-text-title" >E-mail</Label>
                                    <Field name="email" type="text" className="form-field"/>
                                </div>

                                <ErrorMessage component="span" name="nome" className="form-error"></ErrorMessage>
                                <div className="form-group">
                                    <Label className="p-text-title" >Nome</Label>
                                    <Field name="nome" type="text" className="form-field"/>
                                </div>
                                    
                                <ErrorMessage component="span" name="senha" className="form-error"></ErrorMessage>
                                <div className="form-group">
                                    <Label className="p-text-title" >senha</Label>
                                    <Field name="senha" type="password" className="form-field"/>
                                </div>
                                   
                                <div className="form-group">
                                    <button className="login-button" type="submit">Cadastrar</button>
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
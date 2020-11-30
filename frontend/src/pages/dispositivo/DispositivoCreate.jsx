import React from 'react';
import { Container, Row, Col, Label } from 'reactstrap';
import Navbar from '../../components/Navbar/Navbar';
import axios from 'axios';
import { history } from '../../history';
import * as yup from 'yup';
import { Formik, Form, Field } from 'formik';

const UserCreate = () => {

    const handleSubmit = values => {
        axios.post('http://localhost:8080/api/usuario/login', values)
            .then(resp => {
                const { data } = resp
                if (data) {
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
            <Container fluid>
                <Row>
                    <Col sm={2} md={2} lg={2} className="p-0 nav">
                        <Navbar />
                    </Col>
                    <Col sm={10} md={10} lg={10} className="p-0 main-context">
                        <h1 className="title-page">Cadastrar Usuário</h1>
                        <hr className="title-line" />
                        <Col sm={10} md={10} lg={10} className="content-container">
                            <Formik initialValues={{}} onSubmit={handleSubmit} validationSchema={validations}>
                                <Form className="form-group-create">

                                    <div className="form-group-user">
                                        <Label>Nome</Label>
                                        <Field name="nome" type="text" className="form-field" />
                                    </div>

                                    <div className="form-group-user">
                                        <Label>E-mail</Label>
                                        <Field name="email" type="email" className="form-field" />
                                    </div>

                                    <div className="form-group-user">
                                        <Label>Senha</Label>
                                        <Field name="password" type="password" className="form-field" />
                                    </div>
                                </Form>
                            </Formik>
                            <div className="group-btn">

                                <div className="d-flex">
                                    <button className="cad-user-btn" type="text"><a href="/usuario">Voltar</a></button>
                                </div>

                                <div className="d-flex">
                                    <button className="cad-user-btn" type="submit">Cadastrar</button>
                                </div>

                            </div>
                        </Col>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
export default UserCreate;
import React from 'react';
import { Container, Row, Col, Label } from 'reactstrap';
import Navbar from '../../components/Navbar/Navbar';
import axios from 'axios';
import * as yup from 'yup';
import { Formik, Form, Field } from 'formik';
import { Redirect } from 'react-router'

const DispositivoCreate = () => {

    const cadastrarDispositivo = values => {
        console.log(values);
        axios.post('http://localhost:8080/api/dispositivo/adicionar', values)
            .then(resp => {
                console.log(resp);

            })
    }

    const validations = yup.object().shape({
        apelido: yup.string().min(3).required()
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
                            <Formik initialValues={{usuario_id:(localStorage.getItem("usuario"))}} onSubmit={cadastrarDispositivo} validationSchema={validations}>
                                <Form className="form-group-create">
                                    <div className="form-group-user">
                                        <Label>Apelido</Label>
                                        <Field name="apelido" type="text" className="form-field" />
                                    </div>
                                    <div className="form-group-user">
                                        <button className="login-button" type="submit">Cadastrar</button>
                                    </div>
                                </Form>
                            </Formik>
                            <div className="group-btn">
                                <div className="d-flex">
                                    <button className="cad-user-btn" type="text"><a href="/dispositivos">Voltar</a></button>
                                </div>
                            </div>
                        </Col>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
export default DispositivoCreate;
import React from 'react';
import { Container, Row, Col, FormGroup, Label, } from 'reactstrap';
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar';
import axios from 'axios';
import * as yup from 'yup';
import { history } from '../../history';
import { Formik, Form, Field } from 'formik';

const CardCreate = () => {
    const handleCreate = values => {
        axios.post('http://localhost:8080/api/cartao/adicionar', values)
            .then(resp => {
                const { data } = resp
                if (data) {
                    localStorage.setItem('app-token', data)
                    history.phsu('/login')
                }
            })
    }

    const validations = yup.object().shape({
        apelido: yup.string().required(),
        rfid: yup.string().required(),
        usuario: yup.string().required()
    })
    return (
        <>
            <Container fluid>
                <Row>
                    <Col sm={2} md={2} lg={2} className="p-0 nav">
                        <Navbar />
                    </Col>
                    <Col sm={10} md={10} lg={10} className="p-0 main-context">
                        <h1 className="title-page">CADASTRAR CARTÃO</h1>
                        <hr className="title-line" />
                        <Col sm={10} md={10} lg={10} className="content-container">
                            <div className="card-create-padding">
                                <Formik initialValues={{}} onSubmit={handleCreate} validationSchema={validations}>
                                    <Form>
                                        <Container>
                                            <Row>
                                                <Col>
                                                    <div className="forms-disp">
                                                        <Label className="p-text-title" for="nickname" >Apelido do Cartão</Label>
                                                        <Field type="text" name="apelido" />
                                                    </div>
                                                </Col>
                                                <Col>
                                                    <div className="forms-disp">
                                                        <Label className="p-text-title" for="usuario" >Usuário do Cartão</Label>
                                                        <Field type="text" name="usuario" />
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Container>
                                        <Container>
                                            <Row>
                                                <Col>
                                                    <FormGroup className="forms-disp">
                                                        <Label className="p-text-title" for="email" >RFID do cartão</Label>
                                                        <Field type="text" name="rfid" />
                                                    </FormGroup>
                                                </Col>
                                                
                                            </Row>
                                        </Container>
                                        <div className="button-centralizer">
                                        <Link to="/cartoes" type="button" className="p-text-value mrg-link">Cancelar</Link>
                                        <button type="submit" className="p-text-value">Cadastrar</button>
                                    </div>
                                    </Form>
                                    
                                </Formik>
                            </div>
                        </Col>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
export default CardCreate;
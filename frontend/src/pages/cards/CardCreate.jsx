import React from 'react';
import { Container, Row, Col, Label, } from 'reactstrap';
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar';
import axios from 'axios';
import * as yup from 'yup';
import { useHistory } from "react-router-dom";
import { Formik, Form, Field } from 'formik';

const CardCreate = () => {
    const history = useHistory();
    const handleCreate = values => {
        axios.post('http://localhost:8080/api/cartao/adicionar', values)
            .then(resp => {
                console.log(resp);
                history.push("/cartao");
            })
    }

    const validations = yup.object().shape({
        apelido: yup.string().required(),
        rfid: yup.string().required(),
        usuario_id: yup.string().required()
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
                                                        <Label className="p-text-title" for="nickname" >Apelido do Cartão</Label><br/>
                                                        <Field type="text" name="apelido" style={{width: '50%'}} />
                                                    </div>
                                                
                                                    <div className="forms-disp">
                                                        <Label className="p-text-title" for="usuario" >Usuário do Cartão</Label><br/>
                                                        <Field type="text" name="usuario_id" style={{width: '50%'}} />
                                                    </div>
                                        
                                                    <div className="forms-disp">
                                                        <Label className="p-text-title" for="email" >RFID do cartão</Label><br/>
                                                        <Field type="text" name="rfid" style={{width: '50%'}} />
                                                    </div>
                                                </Col>
                                                
                                            </Row>
                                        </Container>
                                        <div className="button-centralizer">
                                        <button type="button" className="new-card-action mrg-link"><Link to="/cartao">Cancelar</Link></button>
                                        <button type="submit" className="new-card-action">Cadastrar</button>
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
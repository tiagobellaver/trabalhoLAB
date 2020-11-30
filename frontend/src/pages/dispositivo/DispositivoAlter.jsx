import React, { Component } from 'react';
import { Container, Row, Col, Table, Button, Label } from 'reactstrap';
import { Formik, Form, Field } from 'formik';
import Navbar from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom'
import ApiService from '../../utils/ApiService';
import axios from 'axios';
import * as yup from 'yup';
import dispositivoRotas from '../../../../backend/src/app/routes/dispositivo-rotas';

class UserCreate extends Component {

    state = {
        dispositivo: [],
    };
    componentDidMount() {
        const id  = this.props.match.params.id;
        ApiService.Dispositivo(id)
            .then(res => ApiService.TrataErros(res))
            .then(res => {
                this.state.dispositivo = res.dispositivo;
                console.log(res.dispositivo);
            }).catch(err => console.log(err));
            
    }

    alterarDispositivo = values => {
        console.log(values);
        axios.put(`http://localhost:8080/api/dispositivo/editar/${this.state.dispositivo.id}`, values)
            .then(resp => {
                console.log(resp);
                this.window.location.href = "/dispositivo";
            })
    }

    validations = yup.object().shape({
        apelido: yup.string().min(3).required()
    })

    render() {
        const { dispositivo } = this.state;
        return (
            <>
                <Container fluid>
                    <Row>
                        <Col sm={2} md={2} lg={2} className="p-0 nav">
                            <Navbar />
                        </Col>
                        <Col sm={10} md={10} lg={10} className="p-0 main-context">
                            <h1 className="title-page">Dispositivo #{dispositivo.id}</h1>
                            <hr className="title-line" />
                            {dispositivo.apelido}
                            <Col sm={10} md={10} lg={10} className="content-container">
                                <Formik initialValues={{id:dispositivo.id, apelido:dispositivo.apelido}} onSubmit={this.alterarDispositivo} validationSchema={this.validations}>
                                    <Form className="form-group-create">
                                        <div className="form-group-user">
                                            <Label>Apelido</Label>
                                            <Field name="apelido" type="text" className="form-field" value={`${dispositivo.apelido}`} />
                                        </div>
                                        <div className="form-group-user">
                                            <button className="login-button" type="submit">Alterar</button>
                                        </div>
                                    </Form>
                                </Formik>
                            </Col>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}
export default UserCreate;
import React, { Component } from 'react';
import { Container, Row, Col, Label} from 'reactstrap';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom'
import ApiService from '../../utils/ApiService';
import * as yup from 'yup';

class DispositivoAlter extends Component {

    state = {
        dispositivo: []
    };
    componentDidMount() {
        const id  = this.props.match.params.id;
        ApiService.Dispositivo(id)
            .then(res => ApiService.TrataErros(res))
            .then(res => {;
                this.setState({ 
                    dispositivo: res.dispositivo
                });

            }).catch(err => console.log(err));
    }

    alterarDispositivo = values => {
        axios.put(`http://localhost:8080/api/dispositivo/editar/${this.state.dispositivo.id}`, values)
            .then(resp => {})
            .catch(err => console.log(err));
    }

    validations = yup.object().shape({
        apelido: yup.string().min(3).required()
    })

    render() {
        const { dispositivo} = this.state;
        return (
            <>
                <Container fluid>
                    <Row>
                        <Col sm={2} md={2} lg={2} className="p-0 nav">
                            <Navbar />
                        </Col>
                        <Col sm={10} md={10} lg={10} className="p-0 main-context">
                            <div>
                                <h1 className="title-page">Alterar Dispositivo #{dispositivo.id}</h1>
                                <hr className="title-line"/>
                            </div>
                            <Col sm={10} md={10} lg={10} className="content-container">
                                <Formik initialValues={{id:dispositivo.id}} onSubmit={this.alterarDispositivo} validationSchema={this.validations}>
                                    <Form className="form-group-create">
                                        <div className="form-group-user">
                                            <Label>Apelido</Label>
                                            <Field name="apelido" type="text" className="form-field" />
                                        </div>
                                        <div className="form-group-user">
                                            <button className="login-button" type="submit">Alterar</button>
                                        </div>
                                    </Form>
                                </Formik>
                                <div className="flex-line">
                                    <Link to={`/dispositivo/${dispositivo.id}`} type="button" className="mrg-link p-text-value link-option">Voltar</Link>
                                </div>
                            </Col>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}
export default DispositivoAlter;
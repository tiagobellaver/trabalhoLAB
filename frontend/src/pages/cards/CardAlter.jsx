import React, { Component } from 'react';
import { Container, Row, Col, Label} from 'reactstrap';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom'
import ApiService from '../../utils/ApiService';
import * as yup from 'yup';

class CartaoAlter extends Component {

    state = {
        cartao: []
    };
    componentDidMount() {
        const id  = this.props.match.params.id;
        ApiService.Cartao(id)
            .then(res => ApiService.TrataErros(res))
            .then(res => {
                console.log(res.cartao);
                this.setState({ 
                    cartao: res.cartao
                });

            }).catch(err => console.log(err));
    }

    alterarCartao = values => {
        console.log(values);
        axios.put(`http://localhost:8080/api/cartao/editar/${this.state.cartao.id}`, values)
            .then(resp => {
                console.log(resp);
            })
            .catch(err => console.log(err));
    }

    validations = yup.object().shape({
        apelido: yup.string().min(3).required(),
        rfid: yup.string().min(3).required()
    })

    render() {
        const { cartao} = this.state;
        return (
            <>
                <Container fluid>
                    <Row>
                        <Col sm={2} md={2} lg={2} className="p-0 nav">
                            <Navbar />
                        </Col>
                        <Col sm={10} md={10} lg={10} className="p-0 main-context">
                            <div>
                                <h1 className="title-page">Alterar Cartão #{cartao.id}</h1>
                                <hr className="title-line"/>
                            </div>
                            <Col sm={10} md={10} lg={10} className="content-container">
                                <Formik initialValues={{id:cartao.id}} onSubmit={this.alterarCartao} validationSchema={this.validations}>
                                    <Form className="form-group-create">
                                        <div className="form-group-user">
                                            <Label>Apelido</Label>
                                            <Field name="apelido" type="text" className="form-field" />
                                        </div>
                                        <div className="form-group-user">
                                            <Label>RFID</Label>
                                            <Field name="rfid" type="text" className="form-field" />
                                        </div>
                                        <div className="form-group-user">
                                            <Label>Usuário</Label>
                                            <Field name="usuario_id" type="text" className="form-field" />
                                        </div>
                                        <div className="form-group-user">
                                            <button className="login-button" type="submit">Alterar</button>
                                        </div>
                                    </Form>
                                </Formik>
                                <div className="flex-line">
                                    <Link to={`/cartao/${cartao.id}`} type="button" className="mrg-link p-text-value link-option">Voltar</Link>
                                </div>
                            </Col>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}
export default CartaoAlter;
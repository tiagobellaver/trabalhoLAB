import React, { Component } from 'react';
import { Container, Row, Col, Table, Label} from 'reactstrap';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom'
import ApiService from '../../utils/ApiService';
import './dispositivo.css'

class DispositivoDetails extends Component {

    state = {
        dispositivo: [],
        cartoes: []
    };
    componentDidMount() {
        const id  = this.props.match.params.id;
        var dispostivo_s;
        ApiService.Dispositivo(id)
            .then(res => ApiService.TrataErros(res))
            .then(res => {
                dispostivo_s = res.dispositivo;

                ApiService.CartaoDispositivo(id)
                    .then(res => ApiService.TrataErros(res))
                    .then(res => {
                        this.setState({ 
                            dispositivo: dispostivo_s,
                            cartoes: res.cartoes
                        });
                    }).catch(err => console.log(err));

            }).catch(err => console.log(err));
    }

    mudarAutorizacao = values => {
        axios.put('http://localhost:8080/api/setarAutorizacao', values)
        .then(resp => {
            window.location.reload();
        })
    }

    removerCartao = values => {
        axios.put('http://localhost:8080/api/removerCartao', values)
        .then(resp => {
            window.location.reload();
        })
    }

    excluirDispositivo = () => {
        axios.delete(`http://localhost:8080/api/dispositivo/deletar/${this.state.dispositivo.id}`)
        .then(resp => {})
    }

    adicionarCartao = values => {
        axios.post(`http://localhost:8080/api/adicionarCartao`, values)
        .then(resp => {
            window.location.reload();
        })
    }

    render() {
        const { dispositivo, cartoes } = this.state;
        return (
            <>
                <Container fluid>
                    <Row>
                        <Col sm={2} md={2} lg={2} className="p-0 nav">
                            <Navbar />
                        </Col>
                        <Col sm={10} md={10} lg={10} className="p-0 main-context">
                            <div>
                                <h1 className="title-page">Detalhes do Dispositivo</h1>
                                <hr className="title-line"/>
                            </div>
                            <div className="padd-dash content-container">
                                <div className="access-card flex-line">
                                    <p className="p-text-title">Dispositivo </p>
                                    <p className="p-text-title">#{dispositivo.id}</p>
                                </div>
                                <div className="user-details">
                                    <ul className="user-card-list">
                                        <li className="card-item">
                                            <p className="p-text-title">Apelido</p>
                                            <p className="p-text-value">{dispositivo.apelido}</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="options-card">
                                    <p className="p-text-title">Ações</p>
                                    <div className="flex-line">
                                        <Link to="/dispositivo" type="button" className="mrg-link p-text-value link-option">Voltar</Link>
                                        <Link to={`/dispositivo/alterar/${dispositivo.id}`} type="button" className="mrg-link p-text-value link-option">Alterar Registro</Link>
                                        <Formik initialValues={{}} onSubmit={this.excluirDispositivo}>
                                            <Form>
                                                <button className="delete-button" type="submit">Excluir Registro</button>
                                            </Form>
                                        </Formik>
                                    </div>
                                </div>
                                <p className="p-text-title table-cards">Cartões do Dispositivo</p>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>APELIDO</th>
                                            <th>AUTORIZADO</th>
                                            <th></th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cartoes.map(cartao => (
                                            <tr  key={cartao.id}>
                                                <td>{cartao.id}</td>
                                                <td>{cartao.apelido}</td>
                                                <td>{cartao.autorizado ? ("Sim") : ("Não")}</td>
                                                <td>
                                                    <Formik initialValues={{dispositivo:dispositivo.id, cartao:cartao.id, autorizado:(cartao.autorizado ? ("0") : ("1"))}} onSubmit={this.mudarAutorizacao}>
                                                        <Form className="login-form">
                                                                <button className="dd-button" type="submit">{cartao.autorizado ? ("DESAUTORIZAR") : ("AUTORIZAR")}</button>
                                                        </Form>
                                                    </Formik>
                                                </td>
                                                <td>
                                                    <Formik initialValues={{dispositivo:dispositivo.id, cartao:cartao.id}} onSubmit={this.removerCartao}>
                                                        <Form className="login-form">
                                                                <button className="dd-button" type="submit">Remover Cartão</button>
                                                        </Form>
                                                    </Formik>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                                <Formik initialValues={{dispositivo:this.props.match.params.id, autorizado:1}} onSubmit={this.adicionarCartao}>
                                    <Form className="form-group-new">
                                        <div className="form-group-box">
                                            <Label>Id do Cartão</Label>
                                            <Field name="cartao" type="number" className="form-field" />
                                        </div>
                                        <div className="form-group-box">
                                            <button className="add-button" type="submit">Adicionar Cartão</button>
                                        </div>
                                    </Form>
                                </Formik>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}
export default DispositivoDetails;
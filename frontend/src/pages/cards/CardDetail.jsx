import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap';
import Navbar from '../../components/Navbar/Navbar';
import axios from 'axios';
import { Formik, Form } from 'formik';


import ApiService from '../../utils/ApiService';

class cardDetails extends Component {

    state = {
        cartao: []
    };

    componentDidMount() {
        const id  = this.props.match.params.id;
        ApiService.Cartao(id)
            .then(res => ApiService.TrataErros(res))
            .then(res => {
                this.setState({ 
                    cartao: res.cartao,
                });
                console.log(res.cartao);
            }).catch(err => console.log(err));
    }

    excluirCartao = () => {
        axios.delete(`http://localhost:8080/api/cartao/deletar/${this.state.cartoes.id}`)
            .then(resp => {
                console.log(resp);
            }).catch(err => console.log(err));
    }

    render() {

        const { cartao } = this.state;

        return (
            <>
                <Container fluid>
                    <Row>
                        <Col sm={2} md={2} className="p-0 nav">
                            <Navbar />
                        </Col>
                        <Col Col sm={10} md={10} className="p-0 main-context">
                            <div>
                                <h1 className="title-page">DETALHES DO CARTÃO</h1>
                                <hr className="title-line" />
                            </div>
                            <div className="padd-dash content-container">
                                <div className="access-card flex-line">
                                    <p className="p-text-title">Cartão #{cartao.id}</p>
                                </div>
                                <Container>
                                    <Row className="user-details">
                                        <Col Col >

                                            <ul className="user-card-list">
                                                <li className="card-item">
                                                    <p className="p-text-title">ID do cartão</p>
                                                    <p className="p-text-value">{cartao.id}</p>
                                                </li>
                                                <li className="card-item">
                                                    <p className="p-text-title">Apelido do dispositvo</p>
                                                    <p className="p-text-value">{cartao.apelido}</p>
                                                </li>
                                                <li className="card-item">
                                                    <p className="p-text-title">Usuario</p>
                                                    <p className="p-text-value">{cartao.usuario_nome}</p>
                                                </li>
                                                <li className="card-item">
                                                    <p className="p-text-title">RFID</p>
                                                    <p className="p-text-value">{cartao.rfid}</p>
                                                </li>
                                            </ul>
                                        </Col>
                                    </Row>
                                </Container>
                                <div className="options-card">
                                    <p className="p-text-title">Ações</p>
                                    <div className="flex-line">
                                        <Link to="/cartao" type="button" className="p-text-value mrg-link link-option">Voltar</Link>
                                        <Link to={`/cartao/alterar/${cartao.id}`} type="button" className="mrg-link p-text-value link-option">Alterar Registro</Link>
                                        <Formik initialValues={{}} onSubmit={this.excluirCartao}>
                                            <Form>
                                                <button className="delete-button" type="submit">Excluir Registro</button>
                                            </Form>
                                        </Formik>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}
export default cardDetails;

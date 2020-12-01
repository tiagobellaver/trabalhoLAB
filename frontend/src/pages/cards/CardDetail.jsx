import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Container, Row, Col, CarouselIndicators } from 'reactstrap';
import Navbar from '../../components/Navbar/Navbar';
import { Image } from 'react-bootstrap';
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
<<<<<<< HEAD
            })
=======
                window.location.reload();
            }).catch(err => console.log(err));
>>>>>>> 8d6959f19dd44670b7a6471dd65c440955b66033
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
                                <h1 className="title-page">CARTÕES</h1>
                                <hr className="title-line" />
                            </div>
                            <div className="padd-dash content-container">
                                <div className="access-card flex-line">
                                    <p className="p-text-title">Cartão #{cartao.id}</p>
                                </div>
                                <Container>
                                    <Row className="user-details">
                                        <Col Col>
                                            <Image src="https://img.ibxk.com.br/materias/5866/21592.jpg?w=328" fluid />
                                        </Col>
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
                                                    <p className="p-text-value">{cartao.usuario}</p>
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
                                    </div>
                                    <Formik initialValues={{}} onSubmit={this.excluirCartao}>
                                        <Form>
                                            <button className="delete-button" type="submit">Excluir Registro</button>
                                        </Form>
                                    </Formik>
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

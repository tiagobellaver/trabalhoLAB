import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Navbar from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom'
import CardIcon from '../../assets/card-icon.png';
import { Image } from 'react-bootstrap';
import './cards.css';

import NewCard from '../../components/NewCard/NewCard';
import Card from '../../components/Card/Card';

import ApiService from '../../utils/ApiService';

class Cards extends Component {

    state = {
        cartoes: [],
    };

    componentDidMount() {
        ApiService.ListaCartoes()
            .then(res => ApiService.TrataErros(res))
            .then(res => {
                console.log(res.cartoes)
                this.setState({ cartoes: res.cartoes });
            }).catch(err => console.log(err));

    }

    render() {

        const { cartoes } = this.state;

        return (
            <>
                <Container fluid>
                    <Row>
                        <Col sm={2} md={2} lg={2} className="p-0 nav">
                            <Navbar />
                        </Col>

                        <Col sm={10} md={10} lg={10} className="p-0 main-context">
                            <h1 className="title-page">Cartões</h1>
                            <hr className="title-line" />

                            <Col sm={10} md={10} lg={10} className="content-container-c">
                                <NewCard />

                                <Col style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr'}}>
                                    {cartoes.map(cartao => (
                                        <Col sm={10} md={10} lg={10} className="card-container d-flex">

                                            <Col sm={6} md={6} lg={6} className="card-icon">
                                                <Image src={CardIcon} fluid />
                                            </Col>
                          
                                            <Col sm={6} md={6} lg={6}>
                                                    <tr key={cartao.id} style={{display: 'grid'}}>
                                                        <td style={{marginBottom: '5px'}}>
                                                           <Link to={`/cartao/${cartao.id}`} type="button" className="link-option">ID do Cartão: {cartao.id}</Link>
                                                        </td>
                                                        <td> Apelido: {cartao.apelido}</td>
                                                    </tr>
                                            </Col>
                        
                                    </Col>
                                    ))}
                                </Col>
                            </Col>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default Cards;
import React, { Component }  from 'react';
import { Container, Row, Col  } from 'reactstrap';
import Navbar from '../../components/Navbar/Navbar';

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
            console.log(res)
            this.setState({cartoes: res.cartoes});
        }).catch(err => console.log(err));

    }

    render() {

        const { cartoes } = this.state;

        return(
            <>
                <Container fluid>
                    <Row>
                        <Col sm={2} md={2} lg={2} className="p-0 nav">
                            <Navbar />
                        </Col>
                    
                        <Col sm={10} md={10} lg={10} className="p-0 main-context">
                            <h1 className="title-page">Cartões</h1>
                            <hr className="title-line"/>

                            <Col sm={10} md={10} lg={10} className="content-container-c">
                                    <NewCard/>
                                <Col className="d-flex justify-content-between">
                                    {cartoes.map(cartao => (
                                        <Card key={cartao.id}/>
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
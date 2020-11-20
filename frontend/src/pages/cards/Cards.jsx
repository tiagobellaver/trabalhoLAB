import React, { Component }  from 'react';
import { Container, Row, Col  } from 'reactstrap';
import Navbar from '../../components/Navbar/Navbar';

import './cards.css';

import NewCard from '../../components/NewCard/NewCard';
import Card from '../../components/Card/Card';

class Cards extends Component {

    state = {
        cards: []
    };

    render() {
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
                <NewCard />
                
            </Col>
        </Row>
    </Container>
</>
        );
    }
}

export default Cards;
import React, { Component } from 'react';
import { Col } from 'reactstrap';
import { Image } from 'react-bootstrap';

import './card.css';

import CardIcon from '../../assets/card-icon.png';

class Card extends Component {

    render() {
        return(
            <>
            <Col sm={12} md={12} lg={12} className="card-container d-flex">
            
                <Col sm={6} md={6} lg={6} className="card-icon">
                    <Image src={CardIcon} fluid/>
                </Col>
                    
                <Col sm={6} md={6} lg={6}>
                    <p><span className="card-bold">Apelido:</span> Rei da Casa</p>
                    <p><span className="card-bold">Usuário:</span> Tiago</p>
                    <p><span className="card-bold">Autorizado:</span> Sim</p>
                    <p><span className="card-bold">Status:</span> Ativo</p>
                </Col>
            </Col>
            </>
        );
    }
}

export default Card;
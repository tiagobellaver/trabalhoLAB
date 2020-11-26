import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Col } from 'reactstrap';

class NewCard extends Component {

    render() {
        return(
            <Col sm={10} md={10} lg={10} className="content-container-c" style={{textAlign: 'end'}}>
                <Link to="/cadastrar-cartao"><button className="new-card">+ Novo Cartão</button></Link>
            </Col>
        );
    }
}

export default NewCard;


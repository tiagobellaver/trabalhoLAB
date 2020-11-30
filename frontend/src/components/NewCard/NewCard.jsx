import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Col } from 'reactstrap';

class NewCard extends Component {

    render() {
        return(
            <Col sm={10} md={10} lg={10} style={{marginTop: '30px', marginBottom:'30px'}}>
                <Link to="/cartao/cadastrar"><button className="new-card">+ Novo Cartão</button></Link>
            </Col>
        );
    }
}

export default NewCard;

